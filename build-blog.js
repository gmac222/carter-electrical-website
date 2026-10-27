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
  <link rel="icon" href="/favicon.ico" sizes="48x48"/>
  <link rel="icon" type="image/png" sizes="96x96" href="/uploads/favicon-96x96.png"/>
  <link rel="icon" type="image/png" sizes="192x192" href="/uploads/favicon-192x192.png"/>
  <link rel="apple-touch-icon" href="/uploads/apple-touch-icon.png"/>
  <link rel="stylesheet" href="/styles.css"/>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
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
          "@id": "${SITE_URL}/#business"
        },
        "description": "${jsonSafe(excerpt)}"
      },
      {
        "@type": ["Organization", "LocalBusiness", "Electrician"],
        "@id": "${SITE_URL}/#business",
        "name": "Carter Electrical Contracting",
        "legalName": "Carter Electrical Contracting",
        "alternateName": "Carter Elec",
        "url": "${SITE_URL}/",
        "telephone": "01244 727291",
        "contactPoint": { "@type": "ContactPoint", "telephone": "01244 738493", "contactType": "office" },
        "email": "ian@carterelec.co.uk",
        "priceRange": "££",
        "foundingDate": "2019",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Unit 5, White Lane Depot, White Lane, Christleton",
          "addressLocality": "Chester",
          "postalCode": "CH3 6AH",
          "addressRegion": "Cheshire",
          "addressCountry": "GB"
        },
        "geo": { "@type": "GeoCoordinates", "latitude": 53.1836, "longitude": -2.8377 },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "07:30",
            "closes": "17:30"
          }
        ],
        "sameAs": ["https://facebook.com/carter.electrical.chester"]
      }
    ]
  }
  </script>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-18182294304"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6WK8M8E9R9');
  gtag('config', 'AW-18182294304');
</script>
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
  <script src="/shared.js"></script>
  <script>
    // Post data used to hydrate the pre-rendered article
    window.CURRENT_POST = ${JSON.stringify({ ...post.data, slug, html: post.html }).replace(/</g, '\\u003c')};
  </script>
  <script src="/shell.js"></script>
  <script src="/tweaks.js"></script>
  <script src="/article.js"></script>
  <script>ReactDOM.hydrateRoot(document.getElementById('root'), React.createElement(ArticlePage));</script>
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
  <link rel="icon" href="/favicon.ico" sizes="48x48"/>
  <link rel="icon" type="image/png" sizes="96x96" href="/uploads/favicon-96x96.png"/>
  <link rel="icon" type="image/png" sizes="192x192" href="/uploads/favicon-192x192.png"/>
  <link rel="apple-touch-icon" href="/uploads/apple-touch-icon.png"/>
  <link rel="stylesheet" href="/styles.css"/>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "${canonicalUrl}#blog",
        "url": "${canonicalUrl}",
        "name": "Carter Electrical Contracting Blog",
        "description": "Read the latest news, insights, and electrical safety advice from Carter Electrical Contracting.",
        "publisher": {
          "@id": "${SITE_URL}/#business"
        }
      },
      {
        "@type": ["Organization", "LocalBusiness", "Electrician"],
        "@id": "${SITE_URL}/#business",
        "name": "Carter Electrical Contracting",
        "legalName": "Carter Electrical Contracting",
        "alternateName": "Carter Elec",
        "url": "${SITE_URL}/",
        "telephone": "01244 727291",
        "contactPoint": { "@type": "ContactPoint", "telephone": "01244 738493", "contactType": "office" },
        "email": "ian@carterelec.co.uk",
        "priceRange": "££",
        "foundingDate": "2019",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Unit 5, White Lane Depot, White Lane, Christleton",
          "addressLocality": "Chester",
          "postalCode": "CH3 6AH",
          "addressRegion": "Cheshire",
          "addressCountry": "GB"
        },
        "geo": { "@type": "GeoCoordinates", "latitude": 53.1836, "longitude": -2.8377 },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "07:30",
            "closes": "17:30"
          }
        ],
        "sameAs": ["https://facebook.com/carter.electrical.chester"]
      }
    ]
  }
  </script>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-18182294304"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6WK8M8E9R9');
  gtag('config', 'AW-18182294304');
</script>
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
  <script src="/shared.js"></script>
  <script>
    window.BLOG_POSTS = ${JSON.stringify(posts.map(p => ({ ...p.data, slug: p.slug }))).replace(/</g, '\\u003c')};
  </script>
  <script src="/shell.js"></script>
  <script src="/tweaks.js"></script>
  <script src="/blog.js"></script>
  <script>ReactDOM.hydrateRoot(document.getElementById('root'), React.createElement(BlogIndex));</script>
</body>
</html>`;
  return html;
}

// Generate sitemap.xml
function generateSitemap(posts) {
  // Only indexable pages belong here (privacy-policy and terms are noindex)
  const staticPages = [
    '/',
    '/about.html',
    '/services.html',
    '/commercial.html',
    '/industrial.html',
    '/domestic.html',
    '/areas.html',
    '/case-studies.html',
    '/contact.html',
    '/blog/',
    '/sitemap.html'
  ];

  // lastmod = date of the last commit that touched the page's file
  const { execSync } = require('child_process');
  const lastmodFor = (page) => {
    let file = page === '/' ? 'index.html' : page.replace(/^\//, '');
    if (file.endsWith('/')) file += 'index.html';
    try {
      const d = execSync(`git log -1 --format=%cs -- "${file}"`, { cwd: __dirname }).toString().trim();
      if (d) return d;
    } catch (e) {}
    return new Date().toISOString().split('T')[0];
  };


  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  staticPages.forEach(page => {
    xml += `  <url>
    <loc>${SITE_URL}${page}</loc>
    <lastmod>${lastmodFor(page)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>\n`;
  });

  // Dynamically add generated location pages (electricians-*.html)
  const rootFiles = fs.readdirSync(__dirname);
  const locationPages = rootFiles.filter(f => f.startsWith('electricians-') && f.endsWith('.html'));
  locationPages.forEach(page => {
    xml += `  <url>
    <loc>${SITE_URL}/${page}</loc>
    <lastmod>${lastmodFor('/' + page)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  // Dynamically add generated case study pages (case-*.html)
  const casePages = rootFiles.filter(f => f.startsWith('case-') && f.endsWith('.html') && f !== 'case-studies.html');
  casePages.forEach(page => {
    xml += `  <url>
    <loc>${SITE_URL}/${page}</loc>
    <lastmod>${lastmodFor('/' + page)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
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


// Pre-render a blog page so the HTML Google receives already holds the H1, copy and links.
// Uses the compiled shell.js / tweaks.js / article.js / blog.js, as the root pages do.
function prerender(htmlPath, componentName, globals) {
  const { JSDOM } = require('jsdom');
  const React = require('react');
  const ReactDOMServer = require('react-dom/server');
  const html = fs.readFileSync(htmlPath, 'utf8');
  const dom = new JSDOM('<!doctype html><html><head></head><body><div id="root"></div></body></html>', { runScripts: 'outside-only', url: SITE_URL + '/' });
  const w = dom.window;
  w.React = React;
  w.useState = React.useState; w.useEffect = React.useEffect; w.useRef = React.useRef;
  w.ReactDOM = { createRoot: () => ({ render: () => {} }), hydrateRoot: () => {} };
  Object.assign(w, globals);
  ['shared.js', 'shell.js', 'tweaks.js', componentName === 'ArticlePage' ? 'article.js' : 'blog.js']
    .forEach(f => w.eval(fs.readFileSync(path.join(__dirname, f), 'utf8')));
  // Components read globals from window; run render with jsdom's window as global
  const prev = { window: global.window, document: global.document };
  global.window = w; global.document = w.document;
  let markup;
  try {
    markup = ReactDOMServer.renderToString(React.createElement(w[componentName]));
  } finally {
    global.window = prev.window; global.document = prev.document;
  }
  // React 19's renderer puts resource hints (image preloads) at the top of the markup.
  // The browser hydrates with React 18, so move them into <head> as convert-static.js does.
  const hoisted = [];
  markup = markup.replace(/^(?:<link [^>]*\/>)+/, m => { hoisted.push(m); return ''; });
  let out = html.replace('</head>', () => hoisted.join('') + '\n</head>');
  out = out.replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`);
  fs.writeFileSync(htmlPath, out);
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
    prerender(path.join(articleDir, 'index.html'), 'ArticlePage', { CURRENT_POST: { ...post.data, slug, html } });
  });

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

  // Write blog index.html
  const blogIndexHtml = generateBlogIndexHtml(posts);
  fs.writeFileSync(path.join(BLOG_DIR, 'index.html'), blogIndexHtml);
  prerender(path.join(BLOG_DIR, 'index.html'), 'BlogIndex', { BLOG_POSTS: posts.map(p => ({ ...p.data, slug: p.slug })) });

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
