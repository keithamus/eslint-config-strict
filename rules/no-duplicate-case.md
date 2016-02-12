# no-duplicate-case
## disallow a duplicate case label

Do not include two (or more) of the same `case` label within a `switch` statement.

### Example:

###### Good
```js
switch (foo) {
  case 1:
    // do something
    break;
  case 2:
    // do something
    break;
  default:
    // do something
    break;
}
```

###### Bad, duplicate case labels
```js
switch (foo) {
  case 1:
    // do something
    break;
  case 1: // duplicate case label!
    // do something
    break;
  default:
    // do something
    break;
}
```

### Justification

Having duplicate case labels is most likely an error. If you use `break` statements then only the first case label will be executed. If you're not using `break` statements then both will be - which is probably not what you want, you could just combine the two blocks into one.

### How to disable

There's not really ever a reason to disable this rule. If it's not an error, you're better off organising your code so that you don't need multiple identical case labels. However, if you really want to:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-duplicate-case": 0
  }
}
```
