const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Parse .env file
const envPath = path.join(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      process.env[key] = value;
    }
  });
}

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Serve API
  if (pathname === '/api/get-leads') {
    res.setHeader('Content-Type', 'application/json');
    if (req.method !== 'GET') {
      res.statusCode = 405;
      return res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      res.statusCode = 401;
      return res.end(JSON.stringify({ error: 'Unauthorized' }));
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
            }
          });
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
          attachments: record.fields['Attachments'] || [],
          notes: notes,
          createdTime: record.createdTime
        };
      });
      leads.sort((a, b) => new Date(b.createdTime) - new Date(a.createdTime));
      res.statusCode = 200;
      return res.end(JSON.stringify({ leads }));
    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      return res.end(JSON.stringify({ error: error.message }));
    }
  }

  if (pathname === '/api/update-lead') {
    res.setHeader('Content-Type', 'application/json');
    if (req.method !== 'POST') {
      res.statusCode = 405;
      return res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      res.statusCode = 401;
      return res.end(JSON.stringify({ error: 'Unauthorized' }));
    }

    let bodyStr = '';
    req.on('data', chunk => { bodyStr += chunk; });
    req.on('end', async () => {
      try {
        const body = JSON.parse(bodyStr);
        const { id, status, name, phone, email, service, notes, quote, sector, scope, timing, postcode, company, details } = body;
        if (!id) {
          res.statusCode = 400;
          return res.end(JSON.stringify({ error: 'Missing record id' }));
        }
        const fields = {};
        if (status !== undefined) fields['Status'] = status;
        if (name !== undefined) fields['Customer Name'] = name;
        if (phone !== undefined) fields['Customer Phone'] = phone;
        if (email !== undefined) fields['Customer Email'] = email;
        if (service !== undefined) fields['Service Requested'] = service;
        if (notes !== undefined) fields['Notes'] = notes;
        if (quote !== undefined) fields['Quote Amount'] = Number(quote) || 0;
        if (sector !== undefined) fields['Sector'] = sector;
        if (scope !== undefined) fields['Scope'] = scope;
        if (timing !== undefined) fields['Timing'] = timing;
        if (postcode !== undefined) fields['Postcode'] = postcode;
        if (company !== undefined) fields['Company'] = company;
        if (details !== undefined) fields['Additional Details'] = details;

        if (Object.keys(fields).length === 0) {
          res.statusCode = 400;
          return res.end(JSON.stringify({ error: 'No fields to update' }));
        }

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
        res.statusCode = 200;
        return res.end(JSON.stringify({ success: true }));
      } catch (err) {
        console.error(err);
        res.statusCode = 500;
        return res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // Serve static files
  let filePath = path.join(__dirname, '..', pathname === '/' ? 'index.html' : pathname);
  
  // Basic path traversal protection
  if (!filePath.startsWith(path.join(__dirname, '..'))) {
    res.statusCode = 403;
    return res.end('Forbidden');
  }

  const ext = path.extname(filePath);
  let contentType = 'text/html';
  if (ext === '.js') contentType = 'text/javascript';
  else if (ext === '.css') contentType = 'text/css';
  else if (ext === '.png') contentType = 'image/png';
  else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
  else if (ext === '.svg') contentType = 'image/svg+xml';
  else if (ext === '.json') contentType = 'application/json';

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not Found');
      return;
    }
    res.setHeader('Content-Type', contentType);
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
