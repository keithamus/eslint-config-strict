# no-debugger
## disallow use of debugger

Do not use the `debugger` statement.

### Example:

###### Good
```js
// nothing...
```

###### Bad, use of `debugger`
```js
debugger;
```

### Justification

`debugger` will typically pause your application using the developer tools debugger, and will leave your application paused until you click unpause. In Node.js, if you run `node debug` or send `USR1` to your node process (e.g. `kill -s USR1 2345`), then it will also pause your application until you press `c` in your terminal. Obviously this is completely undesirable in production code. It is likely that if you have used the debugger statement, you may have forgotten to take it out of your code - this rule is here to help!

### How to disable

There's not really ever a reason to disable this rule. Debugger statements should only be used when testing code. However, if you really want to:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-debugger": 0
  }
}
```
