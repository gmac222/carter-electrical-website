import https from 'https';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).send('Method not allowed');
  }

  const { url } = req.query;
  if (!url || !url.startsWith('https://api.twilio.com/')) {
    return res.status(400).send('Invalid recording URL');
  }

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  if (!accountSid || !authToken) {
    return res.status(500).send('Twilio credentials not configured');
  }

  const auth = 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64');

  return new Promise((resolve) => {
    https.get(url, {
      headers: { 'Authorization': auth }
    }, (twilioRes) => {
      // If Twilio redirects to S3 (which is standard behavior), redirect the client there too
      if (twilioRes.statusCode >= 300 && twilioRes.statusCode < 400 && twilioRes.headers.location) {
        res.writeHead(302, { 'Location': twilioRes.headers.location });
        res.end();
        resolve();
      } else {
        // Otherwise, pipe the data directly
        res.writeHead(twilioRes.statusCode, twilioRes.headers);
        twilioRes.pipe(res);
        twilioRes.on('end', () => resolve());
      }
    }).on('error', (err) => {
      console.error('Error proxying recording:', err);
      res.status(500).send('Error retrieving recording');
      resolve();
    });
  });
}
