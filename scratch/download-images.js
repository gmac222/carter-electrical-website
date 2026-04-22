const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

const xmlPath = path.join(require('os').homedir(), 'Downloads', 'carterelectricalcontracting.WordPress.2026-04-22.xml');
const uploadsDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const xmlContent = fs.readFileSync(xmlPath, 'utf8');

const regex = /<wp:attachment_url><!\[CDATA\[(.*?)\]\]><\/wp:attachment_url>/g;
let match;
const urls = [];

while ((match = regex.exec(xmlContent)) !== null) {
  urls.push(match[1]);
}

console.log(`Found ${urls.length} images to download.`);

async function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const filename = path.basename(url);
    const dest = path.join(uploadsDir, filename);

    // Skip if already exists
    if (fs.existsSync(dest)) {
      resolve();
      return;
    }

    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        console.error(`Failed to download ${url}: ${res.statusCode}`);
        res.resume();
        resolve(); // Continue with others
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${url}: ${err.message}`);
      resolve();
    });
  });
}

async function run() {
  for (const url of urls) {
    if (url.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
      console.log(`Downloading ${url}...`);
      await downloadImage(url);
    }
  }
  console.log('All downloads completed.');
}

run();
