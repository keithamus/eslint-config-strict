# no-extra-semi
## disallow unnecessary semicolons

Don't put extra semicolons where they are not needed.

### Example:

###### Good
```js
var x = 5;
```

###### Bad, too many semicolons!
```js
var x = 5;;
```

### Justification

There's no need to use extra semicolons, they're usually just typos.

### How to disable

There's not really ever a reason to disable this rule. However, if you really want to:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-extra-semi": 0
  }
}
```
