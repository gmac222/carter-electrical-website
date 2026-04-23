const fs = require('fs');
const babel = require('@babel/core');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.jsx'));
for (const file of files) {
  const code = fs.readFileSync(file, 'utf8');
  const result = babel.transformSync(code, { presets: ['@babel/preset-react'] });
  const jsFile = file.replace('.jsx', '.js');
  fs.writeFileSync(jsFile, result.code);
  console.log(`Compiled ${file} -> ${jsFile}`);
}
