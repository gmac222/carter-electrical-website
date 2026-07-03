export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  try {
    const { From, To, CallStatus, Direction, RecordingUrl } = req.body;

    // Handle call recording callbacks from Twilio when a recording is ready - only for our number (+441244727291)
    if (To === '+441244727291' && RecordingUrl && From && process.env.AIRTABLE_BASE_ID && process.env.AIRTABLE_PAT && process.env.AIRTABLE_TABLE_ID) {
      console.log(`Received recording callback for caller ${From}. Recording URL: ${RecordingUrl}`);

      // 1. Search for the most recent lead with this phone number in Airtable
      const searchRes = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}?filterByFormula=SEARCH("${From}", {Customer Phone})`, {
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
                'Notes': currentNotes + `\nCall Recording: ${RecordingUrl}`
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
    const callbackUrl = `${protocol}://${host}/api/twilio-webhook`;

    // Twilio expects TwiML in response to proceed with the call.
    // We return a Dial response so that if the phone number is routed directly to this webhook,
    // Twilio will automatically dial Ian's number, record the call, and send the recording back here.
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?><Response><Dial record="record-from-answer-dual" recordingStatusCallback="${callbackUrl}">+447843672120</Dial></Response>`);
  } catch (error) {
    console.error('Twilio Webhook error:', error);
    // Still return 200 and attempt to connect the call so we do not drop the caller
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send('<?xml version="1.0" encoding="UTF-8"?><Response><Dial>+447843672120</Dial></Response>');
  }
}
