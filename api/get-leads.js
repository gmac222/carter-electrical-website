export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Very basic authentication
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!process.env.AIRTABLE_BASE_ID || !process.env.AIRTABLE_PAT) {
    return res.status(500).json({ error: 'Airtable credentials not configured' });
  }

  try {
    const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Leads`, {
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_PAT}`
      }
    });

    if (!response.ok) {
      throw new Error(`Airtable error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    const leads = data.records.map(record => ({
      id: record.id,
      name: record.fields['Customer Name'],
      phone: record.fields['Customer Phone'],
      email: record.fields['Customer Email'],
      service: record.fields['Service Requested'],
      status: record.fields['Status'],
      quote: record.fields['Quote Amount'],
      notes: record.fields['Notes'],
      createdTime: record.createdTime
    }));

    // Sort leads by createdTime descending (newest first)
    leads.sort((a, b) => new Date(b.createdTime) - new Date(a.createdTime));

    res.status(200).json({ leads });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
