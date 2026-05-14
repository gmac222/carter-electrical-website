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

    // Twilio expects TwiML in response to proceed with the call
    // Empty TwiML tells Twilio to continue executing the rest of the flow (or just end if no flow)
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send('<?xml version="1.0" encoding="UTF-8"?><Response></Response>');
  } catch (error) {
    console.error('Twilio Webhook error:', error);
    // Still return 200 so Twilio doesn't error out the caller
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send('<?xml version="1.0" encoding="UTF-8"?><Response></Response>');
  }
}
