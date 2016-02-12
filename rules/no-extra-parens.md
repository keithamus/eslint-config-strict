# no-extra-parens
## disallow unnecessary parentheses around function expressions

Do use extra parentheses around function expressions.

### Example:

###### Good
```js
(function foo() {})();
var y = function () {};
```

###### Bad, too many wrapping parens
```js
((function foo() {}))();
var y = (function () {});
```

### Justification

Parentheses are generally helpful to aid in readability. This rule (no-extra-parens) actually allows eslint to find and warn on all extra parentheses, but for this configuration it has been tuned to only disallow extra parens around function expressions.

The reason for disallowing these extra parentheses around functions, is that they're commonly used to signal that a function expression is an [Immediately Invoked Function Expression (IIFE)](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression). IIFEs behave very differently to regular function expressions, and so wrapping regular function expressions in parentheses may cause developers who are quickly scanning through code to assume that the expression is an IIFE. Take, for example, the following:

```js
var x = (function () { return 1; });
var y = (function () { return 1; })();
```

The value of `x` is the function itself, while the value of `y` will be resolved to one. It is hard to tell when glancing because the only signal for this is the ending parens in `y` (`();`). The above code is invalid with this rule enabled. Compare the above with this much clearer example:

```js
var x = function () { return 1; };
var y = (function () { return 1; })();
```

We can now easily see that one of these is a regular anonymous function expression and the other an IIFE. We can now rely on `(function` (with paren) as a signal that this is an IIFE, while `function` (without paren) is not.

### How to disable

If you don't like this, and want to disable it - it is best to do so project wide:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-extra-parens": 0
  }
}
```

If you want to make it stricter - disabling any gratuitous parenthesis, then you can change your config like this:

```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-extra-parens": [2, "all"]
  }
}
```
