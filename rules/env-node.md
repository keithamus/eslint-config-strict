# node env

By default, every global that is in the Node.js runtime is available. [The full list is here](https://github.com/sindresorhus/globals/blob/b822c731d03c77e1ed54432e7c484a52fe4a175d/globals.json#L722-L739).

### Example:

###### Good
```js
var foo = require('foo');
module.exports = foo.bar;
```

###### Bad, use a tool like Browserify instead
```js
if (typeof require === 'function' && typeof module === 'object' && module.exports) {
  var foo = require('foo');
  module.exports = foo.bar;
}
```

### Justification

Node has a very small amount of globals, the important ones are `require`, `module`, `exports`, `process`, `Buffer`, `__dirname` and `__filename`. While none of these are available in the browser, they are all available in a compilation environment like [Browserify](http://browserify.org). It is recommended to use something like Browserify to compile code for the browser, as it helps with modular codebases and gives you a consistent interface for your modules - you'll need to use `require` and `module` (unless you're using ES6 with `import` and `export`). Browserify also shims the other Node global variables like `Buffer` or `__filename`, and they can be very useful to use (a common pattern is using env vars like `process.env.NODE_ENV`).

For such a common set of globals, having to add guards incase of undefined globals would be a pain.

### How to disable

If you don't want to set these variables as global, you can simply set the node env to false in your project config:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "env": {
    "node": false
  }
}
```

If you have a particular file you know you won't be using them for, you customise what envs you use by changing the `eslint-env` setting, from within a file:

###### \*.js (file wide)
```js
/*eslint-env builtin, browser */ // < list all environments this file needs
```
