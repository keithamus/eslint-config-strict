# no-empty-character-class
## disallow the use of empty character classes in regular expressions

Do not use empty [character classes](http://www.regular-expressions.info/charclass.html) `[]` inside of a Regular Expression.

### Example:

###### Good
```js
var foo = /^abc/;
```

###### Bad, empty character class
```js
var foo = /^abc[]/;
```

### Justification

An Regular Expression with an empty character class will always fail to match; see for example the following:

```js
assert(/^abc[]/.test('abc') === false);
assert(/^abc[]/.test('abcd') === false);
assert(/^abc[]/.test('abc?') === false);
```

So including an empty character class will very likely always fail any matches you want. It could be likely that you really wanted to match a literal square bracket. If that is the case then you should escape them with backslashes:

```js
assert(/^abc\[\]/.test('abc[]') === true);
```

### How to disable

There's not really ever a reason to disable this rule. You probably want a non-empty character class, or to escape the square brackets. However if you really want to:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-duplicate-case": 0
  }
}
```
