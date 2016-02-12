### no-empty
##### disallow empty statements

Do not include empty statements in your code.

### Example:

###### Good
```js
if (foo) {
  doSomething();
}
```

###### Bad, empty statement
```js
if (foo) {
  // no code here
}
```

### Justification

Empty statements can come about through refactoring code. You very likely don't want them hanging around as the condition expressions will take up processor time to execute for no reason (unless the compiler or minifier optimizes them away). They also may cause developers pause as they read through your code and try to figure out why there is an empty block sitting there.

### How to disable

There's not really ever a reason to disable this rule. You're better off organising your code to not have empty blocks. However if you really want to:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-empty": 0
  }
}
```
