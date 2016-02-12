# builtin env

By default, every native JavaScript global, and some very common ones (such as `setTimeout`) have been set as globals. [The full list is here](https://github.com/sindresorhus/globals/blob/b822c731d03c77e1ed54432e7c484a52fe4a175d/globals.json#L3-L60).

### Example:

###### Good
```js
setTimeout(fn, 0);
new Promise();
```

###### Ok, but not preferred
```js
window.setTimeout(fn, 0);
// Ugh... this is just awful.
var globalObject = typeof window === 'undefined' ? typeof global === 'undefined' ? self : global : window;
new globalObject.Promise();
```

### Justification

Every one of these variables is expected to be available on every browser and Node.js - in other words, pretty much every environment a typical JavaScript developer would work in. Trying to refer to these off of the global object can be a pain, as the global object is sometimes called `window` (e.g. in a browser), sometimes `global` (e.g. node.js) and sometimes `self` (e.g. in a web worker or service worker), and so having to shim a global variable just to use a Promise or Array would be a big pain.

### How to disable

If you don't want to set these variables as global, you can simply set the `builtin` env to false in your project config:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "env": {
    "builtin": false
  }
}
```

If you have a particular file you know you won't be using them for, you customise what envs you use by changing the `eslint-env` setting, from within a file:

###### \*.js (file wide)
```js
/*eslint-env node */ // < list all environments this file needs
```
