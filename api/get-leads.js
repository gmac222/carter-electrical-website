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
    const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`, {
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_PAT}`
      }
    });

    if (!response.ok) {
      throw new Error(`Airtable error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    const leads = data.records.map(record => {
      const notes = record.fields['Notes'] || '';
      const parsedFallback = {};
      if (notes) {
        notes.split('\n').forEach(line => {
          const colonIdx = line.indexOf(': ');
          if (colonIdx !== -1) {
            const key = line.slice(0, colonIdx).trim();
            const val = line.slice(colonIdx + 2).trim();
            if (key === 'Sector') parsedFallback.sector = val === 'N/A' ? '' : val;
            else if (key === 'Scope') parsedFallback.scope = val === 'N/A' ? '' : val;
            else if (key === 'Timing') parsedFallback.timing = val === 'N/A' ? '' : val;
            else if (key === 'Postcode') parsedFallback.postcode = val === 'N/A' ? '' : val;
            else if (key === 'Company') parsedFallback.company = val === 'N/A' ? '' : val;
            else if (key === 'Additional Details') parsedFallback.details = (val === 'None' || val === 'N/A') ? '' : val;
            else if (key === 'Duration') parsedFallback.duration = val;
            else if (key === 'Status') parsedFallback.callStatus = val;
          }
        });
      }

      let duration = null;
      if (parsedFallback.duration) {
        const match = parsedFallback.duration.match(/^(\d+)/);
        if (match) {
          duration = parseInt(match[1], 10);
        }
      }
      
      const callStatus = parsedFallback.callStatus || '';
      const isCall = record.fields['Service Requested'] === 'Inbound Call';
      let isMissed = false;
      if (isCall) {
        if (duration === null || duration === 0 || duration < 15) {
          isMissed = true;
        } else if (callStatus && ['busy', 'no-answer', 'failed', 'ringing'].includes(callStatus.toLowerCase())) {
          isMissed = true;
        }
      }

      return {
        id: record.id,
        name: record.fields['Customer Name'],
        phone: record.fields['Customer Phone'],
        email: record.fields['Customer Email'],
        service: record.fields['Service Requested'],
        sector: record.fields['Sector'] || parsedFallback.sector || '',
        scope: record.fields['Scope'] || parsedFallback.scope || '',
        timing: record.fields['Timing'] || parsedFallback.timing || '',
        postcode: record.fields['Postcode'] || parsedFallback.postcode || '',
        company: record.fields['Company'] || parsedFallback.company || '',
        details: record.fields['Additional Details'] || parsedFallback.details || '',
        status: record.fields['Status'],
        quote: record.fields['Quote Amount'],
        duration: duration,
        isMissed: isMissed,
        callStatus: callStatus,
        attachments: (() => {
          let atts = record.fields['Attachments'] || [];
          if (atts.length === 0 && notes) {
            const match = notes.match(/(?:Call Recording|Recording):\s*(https?:\/\/\S+)/i);
            if (match) {
              atts = [{ url: match[1], filename: 'Call_Recording.mp3' }];
            }
          }
          // Proxy any Twilio URLs through our local proxy to avoid browser basic auth prompts
          return atts.map(att => {
            if (att.url && att.url.includes('api.twilio.com')) {
              return {
                ...att,
                url: `/api/recording?url=${encodeURIComponent(att.url)}`
              };
            }
            return att;
          });
        })(),
        notes: notes,
        createdTime: record.createdTime
      };
    });

    // Sort leads by createdTime descending (newest first)
    leads.sort((a, b) => new Date(b.createdTime) - new Date(a.createdTime));

    res.status(200).json({ leads });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
