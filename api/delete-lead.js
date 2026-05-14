export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: 'Missing record id' });
  }

  try {
    const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_PAT}`
      }
    });

    if (!response.ok) {
      const errBody = await response.text();
      throw new Error(`Airtable error: ${response.status} ${errBody}`);
    }

    res.status(200).json({ success: true, deleted: id });
  } catch (error) {
    console.error('Error deleting lead:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
