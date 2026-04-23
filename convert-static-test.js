const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const babel = require('@babel/core');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

global.React = React;
global.useState = React.useState;
global.useEffect = React.useEffect;
global.useRef = React.useRef;

const htmlContent = fs.readFileSync(path.join(__dirname, 'electricians-deeside.html'), 'utf8');
const dom = new JSDOM(htmlContent, {
  url: "https://carterelec.co.uk/electricians-deeside.html",
  runScripts: "dangerously"
});

dom.window.React = React;
dom.window.useState = React.useState;
dom.window.useEffect = React.useEffect;
dom.window.useRef = React.useRef;

let capturedComponent = null;
dom.window.ReactDOM = {
  createRoot: (el) => ({
    render: (comp) => {
      console.log("RENDER CALLED WITH COMPONENT:", comp);
      capturedComponent = comp;
    }
  }),
  hydrateRoot: (el, comp) => {
    capturedComponent = comp;
  }
};

const sharedCode = fs.readFileSync(path.join(__dirname, 'shared.js'), 'utf8');
dom.window.eval(sharedCode);

const shellCode = babel.transformSync(fs.readFileSync(path.join(__dirname, 'shell.jsx'), 'utf8'), { presets: ['@babel/preset-react'] }).code;
dom.window.eval(shellCode);

const tweaksCode = babel.transformSync(fs.readFileSync(path.join(__dirname, 'tweaks.jsx'), 'utf8'), { presets: ['@babel/preset-react'] }).code;
dom.window.eval(tweaksCode);

const locCode = babel.transformSync(fs.readFileSync(path.join(__dirname, 'locations.jsx'), 'utf8'), { presets: ['@babel/preset-react'] }).code;
dom.window.eval(locCode);

const inlineCode = `ReactDOM.createRoot(document.getElementById('root')).render(<LocationPage locationName="Deeside"/>);`;
const transpiledInline = babel.transformSync(inlineCode, { presets: ['@babel/preset-react'] }).code;
console.log("Transpiled inline code:", transpiledInline);

try {
  dom.window.eval(transpiledInline);
} catch(e) {
  console.error("Error evaluating inline:", e);
}
