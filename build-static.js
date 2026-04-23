const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// 1. Setup JSDOM to mock browser environment
const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="root"></div></body></html>`, {
  url: "https://carterelec.co.uk/"
});
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.HTMLElement = dom.window.HTMLElement;
global.requestAnimationFrame = (cb) => setTimeout(cb, 16);

// 2. Load React
const React = require('react');
const ReactDOMServer = require('react-dom/server');
global.React = React;
global.useState = React.useState;
global.useEffect = React.useEffect;
global.useRef = React.useRef;

// 3. Load babel register to parse JSX
require('@babel/register')({
  presets: ['@babel/preset-react']
});

// 4. Load shared.js
const sharedPath = path.join(__dirname, 'shared.js');
const sharedCode = fs.readFileSync(sharedPath, 'utf8');
// Evaluate shared.js in the global scope
eval(sharedCode);

// 5. Setup capture for ReactDOM
let capturedComponent = null;
global.ReactDOM = {
  createRoot: () => ({
    render: (comp) => {
      capturedComponent = comp;
    }
  })
};

const pagesToBuild = [
  { file: 'index.html', entry: './home.jsx' },
  { file: 'about.html', entry: './pages.jsx' }, // Wait, pages.jsx renders About, Services, Areas?
  { file: 'commercial.html', entry: './commercial.jsx' },
  { file: 'contact.html', entry: './contact.jsx' },
  { file: 'case-studies.html', entry: './cases.jsx' }
];

console.log("Setup complete. Now we can capture components.");
