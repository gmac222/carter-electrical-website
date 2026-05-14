export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { id, status, name, phone, email, service, notes, quote } = req.body;
  if (!id) {
    return res.status(400).json({ error: 'Missing record id' });
  }

  // Build a fields object from only the provided values
  const fields = {};
  if (status !== undefined) fields['Status'] = status;
  if (name !== undefined) fields['Customer Name'] = name;
  if (phone !== undefined) fields['Customer Phone'] = phone;
  if (email !== undefined) fields['Customer Email'] = email;
  if (service !== undefined) fields['Service Requested'] = service;
  if (notes !== undefined) fields['Notes'] = notes;
  if (quote !== undefined) fields['Quote Amount'] = Number(quote) || 0;

  if (Object.keys(fields).length === 0) {
    return res.status(400).json({ error: 'No fields to update' });
  }

  try {
    const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}/${id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_PAT}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ typecast: true, fields })
    });

    if (!response.ok) {
      const errBody = await response.text();
      throw new Error(`Airtable error: ${response.status} ${errBody}`);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error updating lead:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
