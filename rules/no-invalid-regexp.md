# no-invalid-regexp
## disallow invalid regular expression strings in the RegExp constructor

Do not use invalid characters inside the `RegExp` constructor

### Example:

###### Good
```js
var foo = new RegExp('.');
var bar = new RegExp('[a-z]');
```

###### Bad, using invalid RegExp characters or invalid flags
```js
var foo = new RegExp('.', 'z');
var bar = new RegExp('[');
```

### Justification

Using invalid characters in the Regular Expression source (the first argument) or flags (the second argument) will just cause a `SyntaxError` when the code is executed - so enabling this part of the rule is a no-brainer.

### How to disable

There's virtually no reason to disable this rule at all. It will only catch early errors for you. Having said that, if you really feel like disabling it for the whole project, here is how:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-invalid-regexp": 0
  }
}
```
