export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { service, sector, scope, name, company, email, phone, postcode, timing, details } = req.body;

    // 1. Send to Airtable
    if (process.env.AIRTABLE_BASE_ID && process.env.AIRTABLE_PAT && process.env.AIRTABLE_TABLE_ID) {
      await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_PAT}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fields: {
            'Customer Name': name || 'Unknown',
            'Customer Phone': phone || '',
            'Customer Email': email || '',
            'Service Requested': service || 'Unknown',
            'Status': 'New Lead',
            'Quote Amount': 0,
            'Notes': `Sector: ${sector || 'N/A'}\nScope: ${scope || 'N/A'}\nTiming: ${timing || 'N/A'}\nPostcode: ${postcode || 'N/A'}\nCompany: ${company || 'N/A'}\nAdditional Details: ${details || 'None'}`
          }
        })
      });
    }

    // 2. Send Email via Resend (Optional if configured)
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Carter Electrical Leads <leads@carterelec.co.uk>',
          to: [process.env.CONTACT_EMAIL],
          subject: `New Lead: ${name} - ${service}`,
          html: `
            <h2>New Enquiry from Website</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Timing:</strong> ${timing}</p>
            <p><strong>Scope:</strong> ${scope}</p>
            <p><strong>Postcode:</strong> ${postcode}</p>
            <p><strong>Details:</strong> ${details}</p>
          `
        })
      });
    }

    res.status(200).json({ success: true, message: 'Lead submitted successfully' });
  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
