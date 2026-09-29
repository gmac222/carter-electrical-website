export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Amy" language="en-GB">This is a call for Carter Electrical.</Say>
</Response>`);
}
