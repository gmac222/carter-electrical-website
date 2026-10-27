const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const babel = require('@babel/core');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Globals needed for React components
global.React = React;
global.useState = React.useState;
global.useEffect = React.useEffect;
global.useRef = React.useRef;

const htmlFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'));

// Only hydrate when the core scripts (shared.js, shell.js) actually loaded. If
// one fails (as happened to Googlebot with tweaks.js), React would throw while
// hydrating and wipe the pre-rendered HTML, leaving crawlers a blank page.
const HYDRATE_GUARD = 'if (window.CARTER && window.Header) ';
function guardHydrate(code) {
  return code.replace(/(?<!window\.Header\) )ReactDOM\.hydrateRoot\(/g, HYDRATE_GUARD + 'ReactDOM.hydrateRoot(');
}

let capturedComponent = null;
global.ReactDOM = {
  createRoot: () => ({
    render: (comp) => {
      capturedComponent = comp;
    }
  })
};

// Also we need to evaluate the JSX files so they exist in global scope for the inline scripts
// Let's compile and require them first.
const jsxFilesToCompile = [
  'shell.jsx',
  'hero-bg.jsx',
  'home.jsx',
  'pages.jsx',
  'commercial.jsx',
  'industrial.jsx',
  'domestic.jsx',
  'contact.jsx',
  'cases.jsx',
  'locations.jsx',
  'thank-you.jsx'
];

console.log("Compiling JSX files...");
jsxFilesToCompile.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const code = fs.readFileSync(filePath, 'utf8');
    const result = babel.transformSync(code, {
      presets: ['@babel/preset-react']
    });
    const outPath = filePath.replace('.jsx', '.js');
    let outCode = result.code;
    outCode = outCode.replace(
      /ReactDOM\.createRoot\((document\.getElementById\('[^']+'\))\)\.render\(([\s\S]+)\);?/,
      'ReactDOM.hydrateRoot($1, $2);'
    );
    fs.writeFileSync(outPath, guardHydrate(outCode));
    console.log(`Compiled ${file} to ${outPath}`);
  }
});

htmlFiles.forEach(htmlFile => {
  const htmlPath = path.join(__dirname, htmlFile);
  if (!fs.existsSync(htmlPath)) return;
  
  console.log(`Processing ${htmlFile}...`);
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  const dom = new JSDOM(htmlContent, {
    runScripts: "outside-only"
  });
  
  // Set up globals for the jsdom context
  dom.window.React = React;
  dom.window.useState = React.useState;
  dom.window.useEffect = React.useEffect;
  dom.window.useRef = React.useRef;
  
  // Redefine ReactDOM in the JSDOM window
  dom.window.ReactDOM = {
    createRoot: (el) => ({
      render: (comp) => {
        capturedComponent = comp;
      }
    }),
    hydrateRoot: (el, comp) => {
      capturedComponent = comp;
    }
  };
  
  // 1. Evaluate shared.js
  const sharedCode = fs.readFileSync(path.join(__dirname, 'shared.js'), 'utf8');
  dom.window.eval(sharedCode);
  
  // 2. Find all scripts
  const scripts = Array.from(dom.window.document.querySelectorAll('script'));
  
  scripts.forEach(script => {
    const src = script.getAttribute('src');
    const type = script.getAttribute('type');
    
    if (src && src.includes('babel.min.js')) {
      // Remove babel standalone
      script.remove();
      return;
    }
    
    if (type === 'text/babel' || (src && src.endsWith('.js') && !src.includes('unpkg.com'))) {
      if (src) {
        // Load and compile the local file
        const srcFile = path.basename(src);
        // Prioritize JSX file if it exists, otherwise use JS
        const jsxPath = path.join(__dirname, srcFile.replace('.js', '.jsx'));
        const jsPath = path.join(__dirname, srcFile);
        
        let codeToEval = null;
        if (fs.existsSync(jsxPath)) {
          const code = fs.readFileSync(jsxPath, 'utf8');
          codeToEval = babel.transformSync(code, { presets: ['@babel/preset-react'] }).code;
          script.setAttribute('src', src.replace('.jsx', '.js'));
          script.setAttribute('type', 'text/javascript');
        } else if (fs.existsSync(jsPath)) {
          codeToEval = fs.readFileSync(jsPath, 'utf8');
          if (type === 'text/babel') {
             codeToEval = babel.transformSync(codeToEval, { presets: ['@babel/preset-react'] }).code;
          }
        }
        
        if (codeToEval) {
          try {
            dom.window.eval(codeToEval);
          } catch(e) {
            console.error(`Error evaluating ${srcFile}:`, e);
          }
        }
      } else {
        // Inline script
        let codeToEval = script.textContent;
        if (type === 'text/babel' || codeToEval.includes('<')) {
          codeToEval = babel.transformSync(codeToEval, { presets: ['@babel/preset-react'] }).code;
        }
        
        // Execute to capture the component
        capturedComponent = null;
        try {
          dom.window.eval(codeToEval);
        } catch(e) {
          console.error(`Error evaluating inline script in ${htmlFile}:`, e);
        }
        
        // Now update the script tag for the browser
        script.setAttribute('type', 'text/javascript');
        // Replace createRoot with hydrateRoot
        let browserCode = script.textContent.replace(
          /ReactDOM\.createRoot\((document\.getElementById\('[^']+'\))\)\.render\(([\s\S]+)\);?/,
          'ReactDOM.hydrateRoot($1, $2);'
        );
        script.textContent = babel.transformSync(browserCode, { presets: ['@babel/preset-react'] }).code;
      }
    } else if (!src && script.textContent.includes('ReactDOM')) {
        // Inline script that already has text/javascript but needs to be executed to capture component
        capturedComponent = null;
        try {
          dom.window.eval(script.textContent);
        } catch(e) {
          console.error(`Error evaluating pre-compiled inline script in ${htmlFile}:`, e);
        }
        
        let browserCode = script.textContent.replace(
          /ReactDOM\.createRoot\((document\.getElementById\('[^']+'\))\)\.render\(([\s\S]+)\);?/,
          'ReactDOM.hydrateRoot($1, $2);'
        );
        script.textContent = browserCode;
    }
  });
  
  // 3. Render the captured component to HTML
  if (capturedComponent) {
    const renderedHtml = ReactDOMServer.renderToString(capturedComponent);
    const rootDiv = dom.window.document.getElementById('root');
    if (rootDiv) {
      rootDiv.innerHTML = renderedHtml;
      
      // Leave <style> where the component rendered it: moving it to <head>
      // makes the server HTML differ from what React renders on the client,
      // which fails hydration and re-renders the whole page. Earlier runs
      // hoisted (and duplicated) those styles, so strip them from <head>.
      const head = dom.window.document.head;
      const rootStyles = new Set(Array.from(rootDiv.querySelectorAll('style'), el => el.outerHTML));
      head.querySelectorAll('style').forEach(el => {
        if (rootStyles.has(el.outerHTML)) el.remove();
      });
      // Skip tags already hoisted by a previous run so rebuilding is idempotent.
      // Also clear out duplicates that earlier runs left behind.
      const existing = new Set();
      head.querySelectorAll('link, meta, title').forEach(el => {
        if (existing.has(el.outerHTML)) el.remove();
        else existing.add(el.outerHTML);
      });
      const hoistedTags = rootDiv.querySelectorAll('link, meta, title');
      hoistedTags.forEach(tag => {
        if (existing.has(tag.outerHTML)) {
          tag.remove();
        } else {
          existing.add(tag.outerHTML);
          head.appendChild(tag);
        }
      });
    }
  } else {
    console.warn(`No component captured for ${htmlFile}`);
  }
  
  // 4. Save the modified HTML
  let finalHtml = dom.serialize();
  
  // Post-process: fix script tags that JSDOM didn't rewrite properly
  // Replace type="text/babel" src="*.jsx" with src="*.js" (no type attr needed)
  finalHtml = finalHtml.replace(
    /<script\s+type="text\/babel"\s+src="([^"]+)\.jsx">\s*<\/script>/g,
    '<script src="$1.js"></script>'
  );
  // Also handle the reverse attribute order: src before type
  finalHtml = finalHtml.replace(
    /<script\s+src="([^"]+)\.jsx"\s+type="text\/babel">\s*<\/script>/g,
    '<script src="$1.js"></script>'
  );
  // Handle inline text/babel scripts (convert createRoot to hydrateRoot and compile JSX)
  finalHtml = finalHtml.replace(
    /<script\s+type="text\/babel">([^<]+)<\/script>/g,
    (match, code) => {
      let compiled = code;
      try {
        compiled = babel.transformSync(code, { presets: ['@babel/preset-react'] }).code;
        compiled = compiled.replace(
          /ReactDOM\.createRoot\((document\.getElementById\('[^']+'\))\)\.render\(([\s\S]+)\);?/,
          'ReactDOM.hydrateRoot($1, $2);'
        );
      } catch(e) {
        console.error('Error compiling inline script:', e.message);
      }
      return `<script>${compiled}</script>`;
    }
  );
  
  fs.writeFileSync(htmlPath, guardHydrate(finalHtml));
  console.log(`Saved ${htmlFile}`);
});
