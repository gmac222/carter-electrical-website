const babel = require('@babel/core');
const code = `ReactDOM.createRoot(document.getElementById('root')).render(<LocationPage locationName="Deeside"/>);`;
console.log(babel.transformSync(code, { presets: ['@babel/preset-react'] }).code);
