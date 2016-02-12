# no-constant-condition
## disallow use of constant expressions in conditions

Do not create expressions that are always going to be true or false (e.g. by using `true`, `false` or an always-truthy or always-falsey value).

### Example:

###### Good
```js
if (someCondition) {
}
while (someCondition) {
}
```

###### Bad, using constant expressions as conditions
```js
if (true) {
}
if (false) {
}
while (true) {
}
for (;true;) {
}
```

### Justification

Sometimes you might want to use `if (true) {...}` to quickly turn on/off some code during development. This is fine, but these statements should be cleaned up because the code is not especially readable with these ifs. In other circumstances, such as inside loops, you might use the pattern `while (true) { ... do some thing; break; }` - however these are also not very readable, and worse can sometimes can lead to infinite loops, locking up your browser or server.

Just like the `no-cond-assign` rule, this can be said simply as: leave conditional expression areas for just conditional expressions!

### How to disable

There's little reason to disable this within individual files, but if you feel like disabling it for the whole project, here is how:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-constant-condition": 0
  }
}
```
