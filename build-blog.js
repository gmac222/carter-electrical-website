const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const CONTENT_DIR = path.join(__dirname, 'content', 'blog');
const BLOG_DIR = path.join(__dirname, 'blog');
const SITE_URL = 'https://carterelec.co.uk';

// Ensure blog directory exists
if (!fs.existsSync(BLOG_DIR)) {
  fs.mkdirSync(BLOG_DIR, { recursive: true });
}

// Generate an article page
function generateArticleHtml(post) {
  const { title, date, author, excerpt, image, category, tags } = post.data;
  const slug = post.slug;
  const canonicalUrl = `${SITE_URL}/blog/${slug}/`;
  
  // Clean string for JSON
  const jsonSafe = (str) => (str || '').replace(/"/g, '\\"').replace(/\n/g, ' ');

  const html = `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>${title} | Carter Electrical Contracting</title>
  <meta name="description" content="${jsonSafe(excerpt)}"/>
  <link rel="canonical" href="${canonicalUrl}" />
  
  <meta property="og:title" content="${title} | Carter Electrical Contracting" />
  <meta property="og:description" content="${jsonSafe(excerpt)}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:image" content="${SITE_URL}${image || '/uploads/blog-placeholder.png'}" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title} | Carter Electrical Contracting" />
  <meta name="twitter:description" content="${jsonSafe(excerpt)}" />
  <meta name="twitter:image" content="${SITE_URL}${image || '/uploads/blog-placeholder.png'}" />

  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"/>
  <link rel="stylesheet" href="/styles.css"/>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${jsonSafe(title)}",
    "image": [
      "${SITE_URL}${image || '/uploads/blog-placeholder.png'}"
    ],
    "datePublished": "${date}",
    "author": [{
        "@type": "Organization",
        "name": "${jsonSafe(author || 'Carter Electrical Contracting')}"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Carter Electrical Contracting",
      "logo": {
        "@type": "ImageObject",
        "url": "${SITE_URL}/uploads/logo.png"
      }
    },
    "description": "${jsonSafe(excerpt)}"
  }
  </script>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6WK8M8E9R9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6WK8M8E9R9');
</script>
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin="anonymous"></script>
  <script src="/shared.js"></script>
  
  <script>
    // Inject the post data globally so React can pick it up
    window.CURRENT_POST = ${JSON.stringify({ ...post.data, slug, html: post.html })};
  </script>

  <script type="text/babel" src="/shell.jsx"></script>
  <script type="text/babel" src="/tweaks.jsx"></script>
  <script type="text/babel" src="/article.jsx"></script>
  <script type="text/babel">ReactDOM.createRoot(document.getElementById('root')).render(<ArticlePage />);</script>
</body>
</html>`;
  return html;
}

// Generate the blog index page
function generateBlogIndexHtml(posts) {
  const canonicalUrl = `${SITE_URL}/blog/`;
  
  const html = `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Blog | Carter Electrical Contracting</title>
  <meta name="description" content="Read the latest news, insights, and electrical safety advice from Carter Electrical Contracting."/>
  <link rel="canonical" href="${canonicalUrl}" />
  
  <meta property="og:title" content="Blog | Carter Electrical Contracting" />
  <meta property="og:description" content="Read the latest news, insights, and electrical safety advice from Carter Electrical Contracting." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonicalUrl}" />

  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"/>
  <link rel="stylesheet" href="/styles.css"/>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6WK8M8E9R9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6WK8M8E9R9');
</script>
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin="anonymous"></script>
  <script src="/shared.js"></script>
  
  <script>
    window.BLOG_POSTS = ${JSON.stringify(posts.map(p => ({ ...p.data, slug: p.slug })))};
  </script>

  <script type="text/babel" src="/shell.jsx"></script>
  <script type="text/babel" src="/tweaks.jsx"></script>
  <script type="text/babel" src="/blog.jsx"></script>
  <script type="text/babel">ReactDOM.createRoot(document.getElementById('root')).render(<BlogIndex />);</script>
</body>
</html>`;
  return html;
}

// Generate sitemap.xml
function generateSitemap(posts) {
  const staticPages = [
    '',
    '/about.html',
    '/services.html',
    '/commercial.html',
    '/areas.html',
    '/case-studies.html',
    '/contact.html',
    '/blog/'
  ];
  
  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  staticPages.forEach(page => {
    xml += `  <url>
    <loc>${SITE_URL}${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>\n`;
  });

  posts.forEach(post => {
    xml += `  <url>
    <loc>${SITE_URL}/blog/${post.slug}/</loc>
    <lastmod>${post.data.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
  });

  xml += `</urlset>`;
  return xml;
}

function generateRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

function build() {
  if (!fs.existsSync(CONTENT_DIR)) {
    console.log('No content directory found.');
    return;
  }

  const files = fs.readdirSync(CONTENT_DIR).filter(file => file.endsWith('.md'));
  const posts = [];

  files.forEach(file => {
    const rawContent = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8');
    const { data, content } = matter(rawContent);
    const slug = file.replace('.md', '');
    const html = marked(content);

    const post = { slug, data, html, content };
    posts.push(post);

    // Create article folder
    const articleDir = path.join(BLOG_DIR, slug);
    if (!fs.existsSync(articleDir)) {
      fs.mkdirSync(articleDir, { recursive: true });
    }

    // Write article index.html
    const articleHtml = generateArticleHtml(post);
    fs.writeFileSync(path.join(articleDir, 'index.html'), articleHtml);
  });

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

  // Write blog index.html
  const blogIndexHtml = generateBlogIndexHtml(posts);
  fs.writeFileSync(path.join(BLOG_DIR, 'index.html'), blogIndexHtml);

  // Write sitemap and robots.txt
  fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), generateSitemap(posts));
  fs.writeFileSync(path.join(__dirname, 'robots.txt'), generateRobotsTxt());

  // Also write the posts array to shared.js so it's accessible globally for the homepage (Latest Articles)
  const sharedJsPath = path.join(__dirname, 'shared.js');
  let sharedJs = fs.readFileSync(sharedJsPath, 'utf8');
  
  // Simple check to append BLOG_POSTS if it doesn't exist
  if (!sharedJs.includes('window.CARTER.blog')) {
    const blogInjection = `\n\nwindow.CARTER.blog = ${JSON.stringify(posts.map(p => ({ ...p.data, slug: p.slug })))};\n`;
    fs.writeFileSync(sharedJsPath, sharedJs + blogInjection);
  } else {
    // Replace the existing block
    const regex = /window\.CARTER\.blog\s*=\s*\[[\s\S]*?\];/;
    sharedJs = sharedJs.replace(regex, `window.CARTER.blog = ${JSON.stringify(posts.map(p => ({ ...p.data, slug: p.slug })))};`);
    fs.writeFileSync(sharedJsPath, sharedJs);
  }

  console.log('Build complete! Generated blog pages, sitemap, and robots.txt.');
}

build();
