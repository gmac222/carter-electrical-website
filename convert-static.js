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
  'tweaks.jsx',
  'hero-bg.jsx',
  'home.jsx',
  'pages.jsx',
  'commercial.jsx',
  'contact.jsx',
  'cases.jsx'
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
    fs.writeFileSync(outPath, outCode);
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
      
      const hoistedTags = rootDiv.querySelectorAll('link, meta, title, style');
      hoistedTags.forEach(tag => {
        dom.window.document.head.appendChild(tag);
      });
    }
  } else {
    console.warn(`No component captured for ${htmlFile}`);
  }
  
  // 4. Save the modified HTML
  let finalHtml = dom.serialize();
  fs.writeFileSync(htmlPath, finalHtml);
  console.log(`Saved ${htmlFile}`);
});
