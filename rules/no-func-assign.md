# no-func-assign
## disallow overwriting functions written as function declarations

Do not reassign values to function names.

### Example:

###### Good
```js
function foo() {

}
var bar = 5;
```

###### Bad, reassigning a function name to a new value
```js
function foo () {

}
foo = 5;
```

### Justification

The official eslint documentation says it best:

> While a JavaScript interpreter might tolerate it, overwriting/reassigning a function written as a FunctionDeclaration is often indicative of a mistake or issue.

Overwriting function names is more than likely undesirable. This rule gives you early warning that you've done so, so you don't spend ages wondering why your app crashes with `TypeError: 5 is not a function`.

### How to disable

There's little reason to disable this within individual files, but if you feel like disabling it for the whole project, here is how:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-func-assign": 0
  }
}
```
