export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  try {
    const { From, To, CallStatus, Direction } = req.body;

    // We only want to log inbound calls
    // Twilio sends multiple webhooks per call (ringing, answered, completed).
    // Let's just log it once if we have the data.
    
    // In Twilio, set this webhook URL in the "A call comes in" section.
    
    if (From && process.env.AIRTABLE_BASE_ID && process.env.AIRTABLE_PAT && process.env.AIRTABLE_TABLE_ID) {
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

    // 2. Track call conversion in GA4 via Measurement Protocol
    if (From && process.env.GA_API_SECRET) {
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

    // Twilio expects TwiML in response to proceed with the call
    // We return a Dial response so that if the phone number is routed directly to this webhook,
    // Twilio will automatically dial Ian's number to connect the call.
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send('<?xml version="1.0" encoding="UTF-8"?><Response><Dial>+447843672120</Dial></Response>');
  } catch (error) {
    console.error('Twilio Webhook error:', error);
    // Still return 200 and attempt to connect the call so we do not drop the caller
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send('<?xml version="1.0" encoding="UTF-8"?><Response><Dial>+447843672120</Dial></Response>');
  }
}
