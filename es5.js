module.exports = {

  env: {
    builtin: true,
    node: true,
  },

  plugins: [],

  globals: {

  },

  rules: {

    // # Possible Errors
    // The following rules point out areas where you might have made mistakes.

    // disallow or enforce trailing commas in object literals
    'comma-dangle': [
      2,
      'always-multiline',
    ],
    // disallow assignment in conditional expressions
    'no-cond-assign': 2,
    // disallow use of console
    'no-console': 2,
    // disallow use of constant expressions in conditions
    'no-constant-condition': 2,
    // disallow control characters in regular expressions
    'no-control-regex': 2,
    // disallow use of debugger
    'no-debugger': 2,
    // disallow duplicate arguments in functions
    'no-dupe-args': 2,
    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 2,
    // disallow a duplicate case label
    'no-duplicate-case': 2,
    // disallow empty statements
    'no-empty': 2,
    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 2,
    // disallow assigning to the exception in a catch block
    'no-ex-assign': 2,
    // disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 2,
    // disallow unnecessary parentheses
    'no-extra-parens': [
      2,
      // only function expressions will be checked for unnecessary parentheses
      'functions',
    ],
    // disallow unnecessary semicolons
    'no-extra-semi': 2,
    // disallow overwriting functions written as function declarations
    'no-func-assign': 2,
    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 2,
    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 2,
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 2,
    // disallow negation of the left operand of an in expression
    'no-negated-in-lhs': 2,
    // disallow the use of object properties of the global object (Math and JSON)
    // as functions
    'no-obj-calls': 2,
    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 2,
    // disallow sparse arrays
    'no-sparse-arrays': 2,
    // Avoid code that looks like two expressions but is actually one (off by default)
    'no-unexpected-multiline': 2,
    // disallow unreachable statements after a return, throw, continue, or break
    // statement
    'no-unreachable': 2,
    // disallow comparisons with the value NaN
    'use-isnan': 2,
    // Ensure JSDoc comments are valid
    'valid-jsdoc': 0,
    // Ensure that the results of typeof are compared against a valid string
    'valid-typeof': 2,

    // # Best Practices
    // These are rules designed to prevent you from making mistakes. They either
    // prescribe a better way of doing something or help you avoid footguns.

    // Enforces getter/setter pairs in objects
    'accessor-pairs': 2,
    // Enforces return statements in callbacks of array's methods
    'array-callback-return': 2,
    // treat var statements as if they were block scoped
    'block-scoped-var': 0,
    // specify the maximum cyclomatic complexity allowed in a program
    'complexity': [
      2,
      // Maximum cycolmatic complexity
      10,
    ],
    // require return statements to either always or never specify values
    'consistent-return': 2,
    // specify curly brace conventions for all control statements
    'curly': 2,
    // require default case in switch statements
    'default-case': 2,
    // enforces consistent newlines before or after dots
    'dot-location': [
      2,
        // require the dot to be on the same line as the property
      'property',
    ],
    // encourages use of dot notation whenever possible
    'dot-notation': 2,
    // require the use of === and !==
    'eqeqeq': 2,
    // make sure for-in loops have an if statement
    'guard-for-in': 0,
    // disallow the use of alert, confirm, and prompt
    'no-alert': 2,
    // disallow use of arguments.caller or arguments.callee
    'no-caller': 2,
    // disallow lexical declarations in case clauses
    'no-case-declarations': 2,
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 2,
    // disallow use of empty destructuring patterns
    'no-empty-pattern': 2,
    // disallow else after a return in an if
    'no-else-return': 2,
    // disallow use of empty functions
    'no-empty-function': [
      2,
      {
        // Do not allow any type of empty function
        allow: [],
      },
    ],
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 2,
    // disallow use of eval()
    'no-eval': 2,
    // disallow adding to native types
    'no-extend-native': 2,
    // disallow unnecessary function binding
    'no-extra-bind': 2,
    // disallow unnecessary labels
    'no-extra-label': 2,
    // disallow fallthrough of case statements
    'no-fallthrough': 2,
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 2,
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': [
      2,
      {
        // booleans must be explicitly coerced
        boolean: true,
        // numbers must be explicitly coerced
        number: true,
        // strings must be explicitly coerced
        string: true,
      },
    ],
    // disallow var and named functions in global scope
    'no-implicit-globals': 2,
    // disallow use of eval()-like methods
    'no-implied-eval': 2,
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 2,
    // disallow usage of __iterator__ property
    'no-iterator': 2,
    // disallow use of labeled statements
    'no-labels': 0,
    // disallow unnecessary nested blocks
    'no-lone-blocks': 2,
    // disallow creation of functions within loops
    'no-loop-func': 2,
    // disallow the use of magic numbers
    'no-magic-numbers': [
      2,
      {
        ignore: [
          0, // allowed for common operations such as guarding length (`.length === 0`)
          1, // allowed for common operations such as inc/decrementing (`+=1`, `.length  - 1`)
          2, // allowed for common operations such as dividing by two (`half = total / 2`)
        ],
      },
    ],
    // disallow use of multiple spaces
    'no-multi-spaces': 2,
    // disallow use of multiline strings
    'no-multi-str': 2,
    // disallow reassignments of native objects
    'no-native-reassign': 2,
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 2,
    // disallow use of new operator for Function object
    'no-new-func': 2,
    // disallows creating new instances of String,Number, and Boolean
    'no-new-wrappers': 2,
    // disallow use of (old style) octal literals
    'no-octal': 2,
    // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    'no-octal-escape': 2,
    // disallow reassignment of function parameters
    'no-param-reassign': 0,
    // disallow use of process.env
    'no-process-env': 0,
    // disallow usage of __proto__ property
    'no-proto': 2,
    // disallow declaring the same variable more then once
    'no-redeclare': 2,
    // disallow use of assignment in return statement
    'no-return-assign': 2,
    // disallow use of `javascript:` urls.
    'no-script-url': 2,
    // disallow assignments where both sides are exactly the same
    'no-self-assign': 2,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 2,
    // disallow use of comma operator
    'no-sequences': 2,
    // restrict what can be thrown as an exception
    'no-throw-literal': 2,
    // disallow unmodified conditions of loops
    'no-unmodified-loop-condition': 2,
    // disallow usage of expressions in statement position
    'no-unused-expressions': 2,
    // disallow unused labels
    'no-unused-labels': 2,
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 2,
    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 2,
    // disallow use of void operator
    'no-void': 2,
    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': [
      2,
      {
        // Disallowed warning terms
        'terms': [
          'todo',
          'fixme',
          'xxx',
        ],
        // Comment location to check
        'location': 'anywhere',
      },
    ],
    // disallow use of the with statement
    'no-with': 2,
    // require use of the second argument for parseInt()
    'radix': 2,
    // requires to declare all vars on top of their containing scope
    'vars-on-top': 0,
    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': 2,
    // require or disallow Yoda conditions
    'yoda': 2,


    // # Strict Mode
    // These rules relate to using strict mode.

    // require that all functions are run in strict mode
    'strict': [
      2,
      'global',
    ],

    // # Variables
    // These rules have to do with variable declarations.

    // enforce or disallow variable initializations at definition
    'init-declarations': [
      2,
        // always expect variables to be assigned upon initialisation
      'always',
    ],
    // disallow the catch clause parameter name being the same as a variable in the
    // outer scope
    'no-catch-shadow': 2,
    // disallow deletion of variables
    'no-delete-var': 2,
    // disallow labels that share a name with a variable
    'no-label-var': 2,
    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 2,
    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 2,
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 2,
    // disallow use of undefined when initializing variables
    'no-undef-init': 2,
    // disallow use of undefined variable
    'no-undefined': 2,
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': 2,
    // disallow use of variables before they are defined
    'no-use-before-define': 2,

    // # Node.js
    // These rules are specific to JavaScript running on Node.js.

    // enforces error handling in callbacks
    'callback-return': [
      2,
      // name of callback argument
      ['callback', 'cb', 'next', 'done'],
    ],
    // enforce `require()` on top-level module scope
    'global-require': 2,
    // enforces error handling in callbacks
    'handle-callback-err': [
      2,
        // name of error argument
      '^.*(e|E)rr(or)?$',
    ],
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': 2,
    // disallow use of new operator with the require function
    'no-new-require': 2,
    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 2,
    // disallow process.exit()
    'no-process-exit': 2,
    // restrict usage of specified node modules
    'no-restricted-modules': 0,
    // disallow use of synchronous methods
    'no-sync': 2,

    // # Stylistic Issues
    // These rules are purely matters of style and are quite subjective.

    // enforce spacing inside array brackets
    'array-bracket-spacing': [
      2,
      'always',
    ],
    // disallow or enforce spaces inside of single line blocks
    'block-spacing': [
      2,
      // always enforce spacing in blocks
      'always',
    ],
    // enforce one true brace style
    'brace-style': [
      2,
      // brace-style (1tbs or stroustrup)
      '1tbs',
      {
        // allow the start and end braces to be on the same line
        'allowSingleLine': false,
      },
    ],
    // require camel case names
    'camelcase': 2,
    // enforce spacing before and after comma
    'comma-spacing': [
      2,
      {
        // enforce spaces before
        'before': false,
        // enforce spaces after
        'after': true,
      },
    ],
    // enforce one true comma style
    'comma-style': [
      2,
      // enforce comma on the first line, or the last line
      'last',
    ],
    // require or disallow padding inside computed properties
    'computed-property-spacing': [
      2,
      // disallows spaces inside of computed properties
      'never',
    ],
    // enforces consistent naming when capturing the current execution context
    'consistent-this': [
      2,
      // Variable name that a `this` alias must be
      'self',
    ],
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 2,
    // require function expressions to have a name
    'func-names': 2,
    // enforces use of function declarations or expressions
    'func-style': [
      2,
      // enforce declarations
      'declaration',
    ],
    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': [
      2,
      {
        // identifiers must be a minimum of 3 characters
        'min': 3,
        // ... and a max of 50
        'max': 50,
        // ... but `i`, `x`, and `y`, and 'id' are allowed
        'exceptions': [ 'i', 'x', 'y', 'id' ],
        // don't check identifiers that are object properties
        'properties': 'never',
      },
    ],
    // require identifiers to match the provided regular expression
    'id-match': [
      2,
      // identifiers must always be camelCased or CONSTANT_NAMED.
      '^([A-Za-z]*|[A-Z][A-Z_]*[A-Z])$',
      {
        // don't check identifiers in properties are also checked
        'properties': false,
      },
    ],
    // Blacklist certain identifiers to prevent them being used
    'id-blacklist': [
      2,
      // Generic, try instead naming with context, for example "userData", "fileError", "httpCallback"
      'data',
      'item',
      'err',
      'error',
      'cb',
      'callback',
      // These name the type but have no other real context. Try naming with context
      'array',
      'func',
      'object',
      'string',
      'num',
      'number',
      // Common placeholder variables, avoid these in real code
      'foo',
      'bar',
      'baz',
      'bang',
      'biz',
      'bong',
      'tmp',
      'temp',
      'thing',
      // These are common names for `this`. Instead use bind or arrow functions
      'that',
      'self',
      'context',
    ],
    // this option sets a specific tab width for your code
    'indent': [
      2,
      // 2 space tabs
      2,
      {
        // indent switch cases
        'SwitchCase': 1,
      },
    ],
    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': [
      2,
        // Always prefer double quotes
      'prefer-double',
    ],
    // enforces spacing between keys and values in object literal properties
    'key-spacing': [
      2,
      {
        // enforce spaces before colon
        'beforeColon': false,
        // enforce spaces after colon
        'afterColon': true,
      },
    ],
    // enforce spacing before and after keywords
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    // enforces empty lines around comments
    'lines-around-comment': [
      2,
      {
        'beforeBlockComment': false,
        'beforeLineComment': false,
      },
    ],
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': [
      2,
      'unix',
    ],
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': [
      2,
      // max amount of nested callbacks
      5,
    ],
    // require a capital letter for constructors
    'new-cap': [
      2,
      {
        // require constructors called with new to be capped
        'newIsCap': true,
        // require functions with capital to always be called with new
        'capIsNew': false,
      },
    ],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 2,
    // allow/disallow an empty newline after var statement
    'newline-after-var': [
      2,
      'never',
    ],
    // enforce newline after each call when chaining the calls
    'newline-per-chained-call': [
      2,
      {
        ignoreChainWithDepth: 5,
      },
    ],
    // disallow use of the Array constructor
    'no-array-constructor': 2,
    // disallow use of the continue statement
    'no-continue': 0,
    // disallow comments inline after code
    'no-inline-comments': 2,
    // disallow if as the only statement in an else block
    'no-lonely-if': 2,
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,
    // disallow multiple empty lines
    'no-multiple-empty-lines': 2,
    // disallow negated conditions
    'no-negated-condition': 2,
    // disallow nested ternary expressions
    'no-nested-ternary': 2,
    // disallow use of the Object constructor
    'no-new-object': 2,
    // disallow use of certain syntax in code
    'no-restricted-syntax': [
      2,
      // Disallow `with` statements.
      'WithStatement',
    ],
    // disallow whitespace before properties
    'no-whitespace-before-property': 2,
    // disallow space between function identifier and application
    'no-spaced-func': 2,
    // disallow the use of ternary operators
    'no-ternary': 0,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 2,
    // disallow the use of Boolean literals in conditional expressions
    'no-unneeded-ternary': 2,
    // require or disallow padding inside curly braces
    'object-curly-spacing': [
      2,
      // enforces a space inside of curly braces
      'always',
    ],
    // require or disallow one variable declaration per function
    'one-var': [
      2,
      // only allow one variable per declaration
      'never',
    ],
    // require or disallow an newline around variable declarations
    'one-var-declaration-per-line': [
      2,
      // Always enforce one variable declaration per line
      'always',
    ],
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': [
      2,
      // enforce them to be "always" used when possible, or "never" used
      'always',
    ],
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': [
      2,
      // enforce line breaks after operators
      'after',
    ],
    // enforce padding within blocks
    'padded-blocks': [
      2,
      // enforce them to be "always" used when possible, or "never" used
      'never',
    ],
    // require quotes around object literal property names
    'quote-props': 0,
    // specify whether double or single quotes should be used
    'quotes': [
      2,
      // "double" or 'single' quotes should always be enforced
      'single',
    ],
    // Require JSDoc comment
    'require-jsdoc': 0,
    // require or disallow use of semicolons instead of ASI
    'semi': [
      2,
      // enforce them to be "always" used when possible, or "never" used
      'always',
    ],
    // enforce spacing before and after semicolons
    'semi-spacing': [
      2,
      {
        // dissallow spacing before semicolon
        'before': false,
        // enforce spacing after semicolon
        'after': true,
      },
    ],
    // sort variables within the same declaration block
    'sort-vars': 0,
    // sort import declarations within module
    'sort-imports': 0,
    // require or disallow space before blocks
    'space-before-blocks': [
      2,
      // enforce them to be "always" used when possible, or "never" used
      'always',
    ],
    // require or disallow space before function opening parenthesis
    'space-before-function-paren': [
      2,
      {
        // enforce a space before anonymous function parens
        'anonymous': 'always',
        // dissallow a space before named function parens
        'named': 'never',
      },
    ],
    // require or disallow spaces inside parentheses
    'space-in-parens': [
      2,
      // enforce them to be "always" used when possible, or "never" used
      'never',
    ],
    // require spaces around operators
    'space-infix-ops': 2,
    // Require or disallow spaces before/after unary operators
    'space-unary-ops': 2,
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': [
      2,
      'always',
      {
        'exceptions': ['*'],
      },
    ],
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 0,

    // # Legacy
    // The following rules are included for compatibility with JSHint and JSLint.
    // While the names of the rules may not match up with the JSHint/JSLint
    // counterpart, the functionality is the same.

    // specify the maximum depth that blocks can be nested
    'max-depth': [
      2,
      // the max depth
      5,
    ],
    // specify the maximum length of a line in your program
    'max-len': [
      2,
      // line length
      120,
    ],
    // limits the number of parameters that can be used in the function declaration.
    'max-params': [
      2,
      // max params
      5,
    ],
    // specify the maximum number of statement allowed in a function
    'max-statements': [
      2,
      // max statements
      50,
    ],
    // disallow use of bitwise operators
    'no-bitwise': 2,
    // disallow use of unary operators, ++ and --
    'no-plusplus': 0,

  },
};

// # Plugins
// The following rules are included based on the plugins available.
try {
  require('eslint-plugin-filenames');
  module.exports.plugins.push('filenames');
  // specify a pattern file names must match
  module.exports.rules['filenames/filenames'] = [
    2,
    // the pattern a file name must match
    '^[a-z\-\.]+$',
  ];
} catch (e) {
}
