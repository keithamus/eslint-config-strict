# no-dupe-keys
## disallow duplicate keys when creating object literals

Do not include two (or more) properties with the same name inside of an object literal.

### Example:

###### Good
```js
var foo = {
  bar: 1,
  baz: 2,
  qux: 3,
};
```

###### Bad, duplicate key names
```js
var foo = {
  bar: 1,
  baz: 2,
  baz: 3,
};
```

### Justification

Naming two (or more) properties with the same name will cause one of those properties to override the others. There's no real reason to do this - it's most likely an error.

### How to disable

There's not really ever a reason to disable this rule. Duplicate property names are just bad news for your code. However, if you really want to disable it in your project:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-dupe-keys": 0
  }
}
```
