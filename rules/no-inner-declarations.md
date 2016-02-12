# no-inner-declarations
## disallow function or variable declarations in nested blocks

Do not declare block scoped identifiers (`function` and `var`) inside of a block scope (such as an `if`)

### Example:

###### Good
```js
function foo(bar) {
  var quux = null;
  if (bar) {
    quux = 1;
  } else {
    quux = 2;
  }
  if (thing) {
    quux = 3;
  }
  return quux;
}
```

###### Bad, redefining variables and functions in different scopes
```js
function foo(bar) {
  if (bar) {
    var quux = 1;
  } else {
    var quux = 2;
  }
  return quux;
}

if (thing) {
  function foo() {
    return 3;
  }
}
```

### Justification

`var` is inherently block scoped, which if you're writing modern ES2015+ code, is an oddity as `function`, `const` and `let` will be block scoped. This might trip you up - especially in refactoring code - when seeing a declaration in a block, assuming it to be scoped to that block. By enabling this rule, we prevent this being a problem - as `var` is specifically disallowed inside block scopes - its nearest upper scope must be a function!

As for functions, well, prior to ES2015 they are function scoped like vars, however in ES6 compliant code they are block scoped. This, again, is a potential gotcha, and as such it is easier to disallow block scoped functions, and just live happily ever after by scoping your functions to the nearest function scope.

### How to disable

There's little reason to disable this within individual files, but if you feel like disabling it for the whole project, here is how:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-inner-declarations": 0
  }
}
```
