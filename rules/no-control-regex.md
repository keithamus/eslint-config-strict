# no-control-regex
## disallow control characters in regular expressions

**Control Character?**
> Control Characters are hidden unicode characters, typically represented by hexidecimal or unicode escape codes ranging from `\x00`/`\u00000` through to `\x1f`/`\u001f` (26 in decimal), that are used for things like tab characters (`\u0009`, represented as `\t` in strings), line feeds (`\u000A`, represented as `\n` in strings), carriage returns (`\u000D`, represented as `\r` in strings) and even backspace characters (`\u0008`, referred to as `\b` in strings). [You can see a full list on Wikipedia](https://en.wikipedia.org/wiki/C0_and_C1_control_codes#C0_.28ASCII_and_derivatives.29). For a full list of JavaScript single character escape codes (such as `\r`, `\b` and so on) you can look at [Table 34 in the ES6 spec](http://www.ecma-international.org/ecma-262/6.0/index.html#table-34).


You probably don't need to use control characters within your Regular Expressions. Use the single character escape codes (like `\r`, `\b` and so on) if you really need to.

### Example:

###### Good
```js
var matchNewLines = new RegExp('\n');
```

###### Bad, using control characters!
```js
var matchNewLines = new RegExp('\x0A');
```

### Justification

Hex escape codes are pretty opaque (not easily readable and difficult for someone to understand unless they explicitly know what they're looking at), Regular Expressions are pretty opaque. Combining the two is just a world of opaqueness. Single character escape codes are much more readable and more widely understood, as many programmers are familiar with `\n` - but are less familiar with `\x0A` (which I had to look up to see what it was). Use single character escape codes if you need to. If you really need to use control characters, you can disable the rule temporarily and add plenty of comments explaining why you need to use them.

This rule is more meant as a "are you _sure_ you want to be doing that", rather than a "you really don't want to be doing that".

### How to disable

If you use control characters in Regular Expressions a lot in your project, you can disable it project-wide like so:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-control-regex": 0
  }
}
```

If you need to use control characters in just part of your project, its probably best to disable it for a few lines and add lots of comments to justify why: 

###### \*.js (for blocks of code, when you really need it)
```js
/* eslint-disable no-control-regex */
// I need to use control characters inside of this regex as
// it is matching a read-eval-print-loop input which sends every
// character, including control characters, and I want to check
// that a control character was used.
var controlCharacterWasUsed = /\\x00-\\x1F]/;
/* eslint-enable no-control-regex */ // < don't forget to re-enable it!
```
