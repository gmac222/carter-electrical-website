const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  // Remove the infographic preloads
  content = content.replace(/<link rel="preload"[^>]*Carter Electrical Contractors Infographic\.jpg"[^>]*>/g, '');
  
  // As the user wants to apply the UI UX skill throughout the website, let's also remove duplicate preloads
  // to clean up the HTML head.
  const preloadRegex = /<link rel="preload"[^>]*>/g;
  const preloads = content.match(preloadRegex);
  if (preloads) {
    const uniquePreloads = [...new Set(preloads)];
    content = content.replace(preloadRegex, () => '');
    // add unique preloads back before </head>
    content = content.replace('</head>', uniquePreloads.join('') + '</head>');
  }
  
  fs.writeFileSync(f, content);
});
