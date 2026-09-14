import nodemailer from 'nodemailer';

function isBlocked(number) {
  if (!number) return false;
  const cleanNumber = number.replace(/\D/g, '');
  if (!cleanNumber) return false;

  const blockedStr = process.env.BLOCKED_NUMBERS || '';
  const blockedList = blockedStr.split(',').map(num => num.trim().replace(/\D/g, '')).filter(Boolean);

  return blockedList.some(blocked => {
    const suffixLen = Math.min(blocked.length, cleanNumber.length, 10);
    if (suffixLen >= 9) {
      return cleanNumber.endsWith(blocked.slice(-suffixLen)) && blocked.endsWith(cleanNumber.slice(-suffixLen));
    }
    return cleanNumber === blocked;
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  try {
    const query = req.query || {};
    const body = req.body || {};
    const From = body.From || query.From;
    const To = body.To || query.To;
    const { CallStatus, Direction, RecordingUrl, RecordingDuration } = body;

    // Intercept blocked callers
    if (From && isBlocked(From)) {
      console.log(`Rejecting blocked caller: ${From}`);
      res.setHeader('Content-Type', 'text/xml');
      return res.status(200).send('<?xml version="1.0" encoding="UTF-8"?><Response><Reject reason="busy" /></Response>');
    }

    // Handle incoming SMS messages
    const isSms = !!(body.MessageSid || body.SmsSid || query.MessageSid || query.SmsSid);
    if (isSms) {
      if (To === '+441244727291' && From) {
        const smsBodyText = body.Body || query.Body || '';
        console.log(`Received SMS from ${From} to ${To}: "${smsBodyText}"`);

        // 1. Log to Airtable
        if (process.env.AIRTABLE_BASE_ID && process.env.AIRTABLE_PAT && process.env.AIRTABLE_TABLE_ID) {
          try {
            const airtableRes = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${process.env.AIRTABLE_PAT}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                typecast: true,
                fields: {
                  'Customer Name': 'SMS Lead',
                  'Customer Phone': From,
                  'Service Requested': 'Inbound SMS',
                  'Status': 'New Lead',
                  'Quote Amount': 0,
                  'Notes': smsBodyText,
                  'Additional Details': smsBodyText
                }
              })
            });
            if (!airtableRes.ok) {
              const errText = await airtableRes.text();
              console.error('Failed to log SMS to Airtable:', errText);
            } else {
              console.log('Successfully logged SMS to Airtable');
            }
          } catch (atError) {
            console.error('Error logging SMS to Airtable:', atError);
          }
        }

        // 2. Send email notification via Gmail SMTP
        if (process.env.SMTP_USER && process.env.SMTP_PASS && process.env.CONTACT_EMAIL) {
          try {
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
              }
            });

            const recipients = process.env.CONTACT_EMAIL.split(',').map(email => email.trim()).filter(Boolean);
            await transporter.sendMail({
              from: `"Carter Electrical Leads" <${process.env.SMTP_USER}>`,
              replyTo: From || undefined,
              to: recipients,
              subject: `New SMS Lead from ${From}`,
              html: `
                <h2>New SMS Lead Received</h2>
                <p><strong>Phone:</strong> ${From}</p>
                <p><strong>Message:</strong></p>
                <blockquote style="border-left: 3px solid #7AC143; padding-left: 10px; margin: 10px 0; color: #555;">
                  ${smsBodyText.replace(/\n/g, '<br>')}
                </blockquote>
              `
            });
            console.log('Email notification sent successfully for SMS lead via Gmail SMTP');
          } catch (emailErr) {
            console.error('Failed to send email notification for SMS lead via SMTP:', emailErr);
          }
        }

        // 3. Forward SMS notification via ClickSend
        const clicksendUser = process.env.CLICKSEND_USER;
        const clicksendKey = process.env.CLICKSEND_KEY;
        const smsRecipient = process.env.SMS_RECIPIENT_NUMBER;
        if (clicksendUser && clicksendKey && smsRecipient) {
          const authHeader = 'Basic ' + Buffer.from(`${clicksendUser}:${clicksendKey}`).toString('base64');
          const forwardSmsBody = `New SMS Lead from ${From}:\n"${smsBodyText}"`;
          const recipients = smsRecipient.split(',').map(num => num.trim()).filter(Boolean);
          const messages = recipients.map(to => ({ to, body: forwardSmsBody }));

          try {
            await fetch('https://rest.clicksend.com/v3/sms/send', {
              method: 'POST',
              headers: {
                'Authorization': authHeader,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ messages })
            });
            console.log('SMS notification forwarded successfully');
          } catch (smsErr) {
            console.error('Failed to forward SMS notification:', smsErr);
          }
        }
      }

      res.setHeader('Content-Type', 'text/xml');
      return res.status(200).send('<?xml version="1.0" encoding="UTF-8"?><Response></Response>');
    }

    // Handle call recording callbacks from Twilio when a recording is ready - only for our number (+441244727291)
    if (To === '+441244727291' && RecordingUrl && From && process.env.AIRTABLE_BASE_ID && process.env.AIRTABLE_PAT && process.env.AIRTABLE_TABLE_ID) {
      console.log(`Received recording callback for caller ${From}. Recording URL: ${RecordingUrl}`);

      // 1. Search for the most recent lead with this phone number in Airtable (properly URL encode the formula)
      const formula = `SEARCH("${From}", {Customer Phone})`;
      const searchRes = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}?filterByFormula=${encodeURIComponent(formula)}`, {
        headers: { 'Authorization': `Bearer ${process.env.AIRTABLE_PAT}` }
      });

      if (searchRes.ok) {
        const searchData = await searchRes.json();
        const records = searchData.records || [];
        if (records.length > 0) {
          // Sort by createdTime descending to find the most recent lead
          records.sort((a, b) => new Date(b.createdTime) - new Date(a.createdTime));
          const targetRecord = records[0];

          const currentNotes = targetRecord.fields['Notes'] || '';
          const currentAttachments = targetRecord.fields['Attachments'] || [];
          const durationVal = RecordingDuration ? `${RecordingDuration}s` : '0s';
          const newNotes = currentNotes + `\nCall Recording: ${RecordingUrl}\nDuration: ${durationVal}\nStatus: completed`;

          // 2. Attach the recording MP3 file and add a link in the notes
          await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}/${targetRecord.id}`, {
            method: 'PATCH',
            headers: {
              'Authorization': `Bearer ${process.env.AIRTABLE_PAT}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              typecast: true,
              fields: {
                'Attachments': [
                  ...currentAttachments,
                  { url: RecordingUrl + '.mp3', filename: 'Call_Recording.mp3' }
                ],
                'Notes': newNotes
              }
            })
          });
          console.log(`Successfully attached call recording to Airtable lead ID: ${targetRecord.id}`);
        } else {
          console.log(`No matching lead found for caller: ${From}`);
        }
      } else {
        const errText = await searchRes.text();
        console.error('Airtable lead search failed:', errText);
      }

      // Return empty TwiML response for the recording callback
      res.setHeader('Content-Type', 'text/xml');
      return res.status(200).send('<?xml version="1.0" encoding="UTF-8"?><Response></Response>');
    }

    // Standard incoming call handling - only log calls to Carter Electrical's number (+441244727291)
    if (To === '+441244727291' && From && process.env.AIRTABLE_BASE_ID && process.env.AIRTABLE_PAT && process.env.AIRTABLE_TABLE_ID) {
      // Deduplicate: Check if a call from the same number was created in Airtable in the last 60 seconds
      let isDuplicate = false;
      try {
        const searchFormula = `SEARCH("${From}", {Customer Phone})`;
        const searchUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}?filterByFormula=${encodeURIComponent(searchFormula)}&maxRecords=5`;
        const atSearchRes = await fetch(searchUrl, {
          headers: { 'Authorization': `Bearer ${process.env.AIRTABLE_PAT}` }
        });
        if (atSearchRes.ok) {
          const atSearchData = await atSearchRes.json();
          const records = atSearchData.records || [];
          if (records.length > 0) {
            const times = records.map(r => new Date(r.createdTime).getTime()).filter(t => !isNaN(t));
            if (times.length > 0) {
              const mostRecentTime = Math.max(...times);
              const diffMs = Date.now() - mostRecentTime;
              if (diffMs < 60 * 1000) {
                isDuplicate = true;
                console.log(`Duplicate call detected from ${From} (logged ${Math.round(diffMs / 1000)}s ago). Skipping Airtable log.`);
              }
            }
          }
        }
      } catch (searchErr) {
        console.error('Error during call deduplication search:', searchErr);
      }

      if (!isDuplicate) {
        await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.AIRTABLE_PAT}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            typecast: true,
            fields: {
              'Customer Name': 'Phone Caller',
              'Customer Phone': From,
              'Service Requested': 'Inbound Call',
              'Status': 'New Lead',
              'Quote Amount': 0,
              'Notes': `Incoming call tracked via Twilio.\nCalled Number: ${To}\nStatus: ${CallStatus || 'Unknown'}`
            }
          })
        });
      }
    }

    // 2. Track call conversion in GA4 via Measurement Protocol - only for our number (+441244727291)
    if (To === '+441244727291' && From && process.env.GA_API_SECRET) {
      try {
        const measurementId = 'G-6WK8M8E9R9';
        const apiSecret = process.env.GA_API_SECRET;
        const clientId = 'twilio_' + From.replace(/\D/g, '');

        await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            client_id: clientId,
            events: [
              {
                name: 'generate_lead',
                params: {
                  lead_type: 'phone',
                  value: 1.0,
                  currency: 'GBP'
                }
              },
              {
                name: 'phone_lead',
                params: {
                  value: 1.0,
                  currency: 'GBP'
                }
              }
            ]
          })
        });
      } catch (gaError) {
        console.error('GA4 Measurement Protocol error:', gaError);
      }
    }

    const host = req.headers.host || 'carterelec.co.uk';
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const callbackUrl = `${protocol}://${host}/api/twilio-webhook?From=${encodeURIComponent(From || '')}&To=${encodeURIComponent(To || '')}`;

    // Twilio expects TwiML in response to proceed with the call.
    // We return a Dial response so that if the phone number is routed directly to this webhook,
    // Twilio will automatically dial Ian's number, record the call, and send the recording back here.
    const escapedCallbackUrl = callbackUrl.replace(/&/g, '&amp;');
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?><Response><Dial record="record-from-answer-dual" recordingStatusCallback="${escapedCallbackUrl}">+447843672120</Dial></Response>`);
  } catch (error) {
    console.error('Twilio Webhook error:', error);
    // Still return 200 and attempt to connect the call so we do not drop the caller
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send('<?xml version="1.0" encoding="UTF-8"?><Response><Dial>+447843672120</Dial></Response>');
  }
}
