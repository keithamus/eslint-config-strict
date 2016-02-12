# builtin env
## NOTE: only added when including `"strict/browser"`

By default, every JavaScript global as per W3C specs have been set as globals. [The full list is here](https://github.com/sindresorhus/globals/blob/b822c731d03c77e1ed54432e7c484a52fe4a175d/globals.json#L63-L652).

### Example:

###### Good
```js
addEventListener('load', fn);
new URL();
```

###### Ok, but not preferred
```js
window.addEventListener(fn, 0);
// Ugh... this is just awful.
if (typeof window !== 'undefined' && typeof window.alert === 'function') {
    window.alert('This is lame');
}
```

### Justification

Every one of these variables is expected to be available on every browser. Anything you would that isn't would be reasonably expected to be polyfilled. Trying to refer to these off of the global object can be a pain, especially if you know your code is targeting the browser environment, and so this environment has been added - as an opt in - to help facilitate this.

### How to disable

As this is opt-in, you can easily disable it by just excluding it from your `"extends"` directive, for example:

###### package.json with opt-in browser env
```json
"eslintConfig": {
  "extends": ["strict", "strict/browser"]
}
```

###### package.json ***without*** opt-in browser env
```json
"eslintConfig": {
  "extends": ["strict"],
}
```

Alternatively, you can explicitly disable it by adding the `"env"` property in your config:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict", "strict/browser"],
  "env": {
    "browser": false
  }
}
```

If you have a particular file you know you won't be using them for, you customise what envs you use by changing the `eslint-env` setting, from within a file:

###### \*.js (file wide)
```js
/*eslint-env node */ // < list all environments this file needs
```
