# no-ex-assign
## disallow assigning to the exception in a catch block

You should not re-assign the error argument inside of a catch block.

### Example:

###### Good
```js
try {
  someCode();
} catch(someError) {
  var thing = new Thing();
}
```

###### Bad, reassigning the catch variable
```js
try {
  someCode();
} catch(someError) {
  someError = new Thing();
}
```

### Justification

Overriding the error variable will mean you lose any information about the error you just caught, and there is no way to get it back. Also, you should be giving your variables useful names, and if you've given the error variable a useful name, it shouldn't be useful for anything else.

You might sometimes see this pattern in the wild, because it is a way to emulate block scoped variables (ES6's `let`) within ES5 code. If you want to use `let`, you're much better off using a compiler like Babel or Traceur to do this instead.

### How to disable

There's not really ever a reason to disable this rule. You're better off organising your code to not overwrite sensitive varaibles like this. However if you really want to:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-ex-assign": 0
  }
}
```
