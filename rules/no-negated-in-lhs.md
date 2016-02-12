# no-negated-in-lhs
## disallow negation of the left operand of an in expression

Do not negate left hand operands.

### Example:

###### Good
```js
if (!(a in b)) {

}
if (a in b === false) {

}
if (!(a instanceof b)) {

}
if (a instanceof b === false) {

}
```

###### Bad, negating the LHO, this is not the result you're looking for
```js
if (!a in b) {

}
if (!a instanceof b) {

}
```

### Justification

If you negate the left hand operand, operator precedence will dictate that you end up coercing that operand, as opposed to negating the whole expression, meaning your LHO will be a boolean. To demonstrate with code:

```js
!a instanceof b === (!a) instanceof b === true/false instanceof b
!a in b === (!a) in b === true/false in b
```

This is almost definitely not what you want to happen. You may have meant to negate the whole expression - to say that you're expecting the whole expression to be false. If this is the case, you should wrap in parens - or even better, combine with an equality operator to really get the message across:

```js
!(a instanceof b) === (a instanceof b === false)
!(a in b) === (a in b === false)
```

If you really well and truly did mean to cast your left hand operand, then you can do so explicitly with the `Boolean` constructor, and the intent will be much clearer:

```js
Boolean(a) instanceof b
Boolean(a) in b
```


### How to disable

There's little reason to disable this within individual files, but if you feel like disabling it for the whole project, here is how:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-negated-in-lhs": 0
  }
}
```
