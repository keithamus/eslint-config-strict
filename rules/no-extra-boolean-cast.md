# no-extra-boolean-cast
## disallow double-negation boolean casts in a boolean context

Do not cast variables as to booleans inside of an expression where they will already be case, such as inside of an if statement, or in a ternary operator.

### Example:

###### Good
```js
if (foo) {

}
while (foo) {

}
for(; foo; ) {

}
var bar = foo ? 'bar' : 'baz';
```

###### Bad, coercing to a boolean that will already be coerced
```js
if (!!foo) {

}
while (!!foo) {

}
for(; !!foo; ) {

}
var bar = !!foo ? 'bar' : 'baz';
```

### Justification

To cast these to booleans is a pointless operation, as they will already be cast as such by virtue of being inside of a boolean context.

Note this rule doesn't stop you using `!!` outside of areas that aren't implicitly cast to booleans - the rule [no-implicit-coercion](./no-implicit-coercion.md) does this.

### How to disable

There's little point to disabling this rule, but if you want to, it is best to do it project wide:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-extra-boolean-cast": 0
  }
}
```
