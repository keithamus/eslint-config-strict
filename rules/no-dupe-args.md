# no-dupe-args
## disallow duplicate arguments in functions

Do not name two arguments with the same name inside of a functions arguments.

### Example:

###### Good
```js
function foo(bar, baz, qux) {}
```

###### Bad, duplicate argument names
```js
function foo(bar, baz, bar) {}
```

### Justification

Naming two arguments with the same name in strict mode will cause a `SyntaxError` - so this rule serves as an early warning for you. Outside of strict mode, the right-most argument will override the value of all other arguments with the same name - which is obviously bad news.

### How to disable

There's not really ever a reason to disable this rule. Duplicate argument names are just bad news for your code. However, if you really want to disable it in your project:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-dupe-args": 0
  }
}
```
