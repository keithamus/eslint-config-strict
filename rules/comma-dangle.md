# comma-dangle
## disallow or enforce trailing commas in object literals (always-multiline)

If you have an Object or Array literal spanning multiple lines, you must make sure each line has a trailing comma.

### Example:

###### Good
```js
var foo = {
  bar: 'baz',
  qux: 'quux',
};
var bar = [
  'baz',
  'qux',
];
```

###### Bad, missing comma
```js
var foo = {
  bar: 'baz',
  qux: 'quux'
};
var bar = [
  'baz',
  'qux'
]
```

### Justification

Trailing comma is valid ES5 syntax, which works all the way back to IE8. Minifiers will strip them out and so there's not need to worry about older browsers either. Multiline trailing commas help with readability. Most importantly, multiline trailing commas are very helpful for Diff and Blame tools. For example:

**Original File (without trailing comma)**
```js
var foo = {
  bar: 'baz',
  qux: 'quux'
};
```

**Adding a property, the diff**
```diff
index a..b
@@ 0,4 +0,5 @@
  var foo = {
    bar: 'baz',
-   qux: 'quux'
+   qux: 'quux',
+   bing: 'bong'
  };
```

**Blame for that commit**
```diff
User A:   var foo = {
User A:     bar: 'baz',
User B:     qux: 'quux',
User B:     bing: 'bong'
User A:   };
```

Compare this to:

**Original File (*with* trailing comma)**
```js
var foo = {
  bar: 'baz',
  qux: 'quux',
};
```

**Adding a property, the diff**
```diff
index a..b
@@ -0,4 +0,5 @@
  var foo = {
    bar: 'baz',
    qux: 'quux',
+   bing: 'bong',
  };
```

**Blame for that commit**
```diff
User A:   var foo = {
User A:     bar: 'baz',
User A:     qux: 'quux',
User B:     bing: 'bong',
User A:   };
```

The second example is better, because the diff is less cluttered - it shows ultimate intent, which was to add a line. The blame is also kept clean, in that User A who added the `qux` property continues to be the user in that blame. We've avoided the problem that the User B appears in the Blame log for a line which they were forced to edit, despite not changing any logical code for that line. Should the property be changed, of course, the new user will be in the Blame log for this - and rightly so.

### How to disable

If you feel this reasoning is not justified, then feel free to disable this project wide. There is little reason to disable it per-file or per-code-block.

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "comma-dangle": 0
  }
}
```
