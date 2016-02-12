# no-cond-assign
## disallow assignment in conditional expressions

Do not assign to a variable inside of a conditional expression (for example inside of an if).

### Example:

###### Good
```js
var foo = true;
if (foo) {
  ...
}

while(el.parentNode) {
  el = el.parentNode;
}
```

###### Bad, assignment in conditionals
```js
var foo;
if (foo = true) {
  ...
}

while(el = el.parentNode) {

}
```

### Justification

Disallowing assignment in conditional expressions can often save you from mistakes, for example you might have meant `if(foo === true)` but accidentally made a typo and so wrote `if(foo = true)`. Of course, even when you intentionally meant to make the assignment, this can trip others up while reading the code - either they mistake the assignment for a condition, or it causes pause as they wonder why you've made the assignment where a conditional should be. In other words, it is less readable!

Also, when it comes to updating code - if the assignment needs to be updated, it may not make sense to still keep it inside the conditional (for example if the new developer needs to make more assignments, or perhaps the assignment needs to be moved to a different part of your function), and so the developer making the changes has to do more work to move the assignment out of the conditional.

Essentially: leave conditional expression areas for just conditional expressions!

### How to disable

There's little reason to disable this within individual files, but if you feel like disabling it for the whole project, here is how:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-cond-assign": 0
  }
}
```
