const babel = require('@babel/core');
const code = `ReactDOM.createRoot(document.getElementById('root')).render(<LocationPage locationName="Deeside"/>);`;
const transpiled = babel.transformSync(code, { presets: ['@babel/preset-react'] }).code;

const regex1 = /ReactDOM\.createRoot\(([^)]+)\)\.render\(([\s\S]+)\);?/;
console.log("Match 1?", transpiled.match(regex1) !== null);

const regex2 = /ReactDOM\.createRoot\((document\.getElementById\(['"]root['"]\))\)\.render\(([\s\S]+)\);?/;
console.log("Match 2?", transpiled.match(regex2) !== null);

const regex3 = /ReactDOM\.createRoot\(\s*document\.getElementById\(['"]root['"]\)\s*\)\.render\(\s*([\s\S]*?)\s*\);?/g;
console.log("Match 3?", transpiled.match(regex3) !== null);
