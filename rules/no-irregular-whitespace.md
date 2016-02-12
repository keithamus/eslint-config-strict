# no-irregular-whitespace
## disallow irregular whitespace outside of strings and comments

Do not use esoteric whitespace characters, such as Zero-Width-Spaces in your code.

### Example:

###### Good
```js
function thing() {
  return 'Normal code here';
}
```

###### Bad, using irregular whitespace everywhere
```js
/* Loads of funky spaces you might not be able to see here */
functionthing᠎/() {
  return 'Woah - funky spacing';
}
```

### Justification

Using weird spaces, especially the more unreadable kind like Zero-Width-Spaces will make your code very hard to debug. It can also cause issues with ES5 compatible parsers.

### How to disable

There's virtually no reason to disable this rule at all. It will only catch early errors for you. Having said that, if you really feel like disabling it for the whole project, here is how:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-irregular-whitespace": 0
  }
}
```
