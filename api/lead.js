export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { service, sector, scope, name, company, email, phone, postcode, timing, details } = req.body;

    // 1. Send to Airtable
    if (process.env.AIRTABLE_BASE_ID && process.env.AIRTABLE_PAT && process.env.AIRTABLE_TABLE_ID) {
      const airtableRes = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_PAT}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          typecast: true,
          fields: {
            'Customer Name': name || 'Unknown',
            'Customer Phone': phone || '',
            'Customer Email': email || '',
            'Service Requested': service || 'Unknown',
            'Status': 'New Lead',
            'Quote Amount': 0,
            'Sector': sector || '',
            'Scope': scope || '',
            'Timing': timing || '',
            'Postcode': postcode || '',
            'Company': company || '',
            'Additional Details': details || '',
            'Notes': `Sector: ${sector || 'N/A'}\nScope: ${scope || 'N/A'}\nTiming: ${timing || 'N/A'}\nPostcode: ${postcode || 'N/A'}\nCompany: ${company || 'N/A'}\nAdditional Details: ${details || 'None'}`
          }
        })
      });
      if (!airtableRes.ok) {
        const airtableErr = await airtableRes.text();
        console.error('Airtable insertion failed:', airtableErr);
      }
    }

    // 2. Send Email via Resend (Optional if configured)
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      const emailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Carter Electrical Leads <leads@carterelec.co.uk>',
          to: process.env.CONTACT_EMAIL.split(',').map(email => email.trim()).filter(Boolean),
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
      if (!emailRes.ok) {
        const emailErr = await emailRes.text();
        console.error('Resend email sending failed:', emailErr);
      }
    }

    // 3. Send SMS via ClickSend (Optional if configured)
    const clicksendUser = process.env.CLICKSEND_USER;
    const clicksendKey = process.env.CLICKSEND_KEY;
    const smsRecipient = process.env.SMS_RECIPIENT_NUMBER;

    if (clicksendUser && clicksendKey && smsRecipient) {
      const authHeader = 'Basic ' + Buffer.from(`${clicksendUser}:${clicksendKey}`).toString('base64');
      const smsBody = `New Lead: ${name || 'Unknown'}\nPhone: ${phone || 'N/A'}\nPostcode: ${postcode || 'N/A'}\nService: ${service || 'N/A'}\nTiming: ${timing || 'N/A'}\nScope: ${scope || 'N/A'}`;

      const recipients = smsRecipient.split(',').map(num => num.trim()).filter(Boolean);
      const messages = recipients.map(to => ({
        to,
        body: smsBody
      }));

      try {
        const smsRes = await fetch('https://rest.clicksend.com/v3/sms/send', {
          method: 'POST',
          headers: {
            'Authorization': authHeader,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ messages })
        });

        if (!smsRes.ok) {
          const smsErr = await smsRes.text();
          console.error('ClickSend SMS sending failed:', smsErr);
        } else {
          const smsData = await smsRes.json();
          console.log('ClickSend SMS sent successfully:', smsData);
        }
      } catch (smsError) {
        console.error('ClickSend SMS error:', smsError);
      }
    }

    res.status(200).json({ success: true, message: 'Lead submitted successfully' });
  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
