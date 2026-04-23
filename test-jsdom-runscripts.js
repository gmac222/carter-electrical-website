const { JSDOM } = require('jsdom');
const dom = new JSDOM('<script>window.foo = "bar";</script>', { runScripts: "outside-only" });
console.log(dom.window.foo); // Should be undefined
dom.window.eval('window.bar = "baz"');
console.log(dom.window.bar); // Should be baz
