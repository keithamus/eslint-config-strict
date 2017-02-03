'use strict';
module.exports = require('./es5');
module.exports.env = module.exports.env || {};
module.exports.rules = module.exports.rules || {};
module.exports.parserOptions = module.exports.parserOptions || {};
module.exports.parserOptions.ecmaFeatures = module.exports.parserOptions.ecmaFeatures || {};

module.exports.env.es6 = true;

module.exports.parserOptions.ecmaVersion = 6;
module.exports.parserOptions.sourceType = 'module';

module.exports.parserOptions.ecmaFeatures = {
  // allow return statements in the global scope
  globalReturn: true,
  // enable global strict mode (if ecmaVersion is 5 or greater)
  impliedStrict: true,
  // enable JSX
  jsx: false,
  // enable support for the experimental object rest/spread properties
  experimentalObjectRestSpread: false,
};
// require braces in arrow function body
module.exports.rules['arrow-body-style'] = [2, 'as-needed'];
// require parens in arrow function arguments
module.exports.rules['arrow-parens'] = [2, 'always'];
// require space before/after arrow function's arrow
module.exports.rules['arrow-spacing'] = [2, { before: true, after: true }];
// verify super() callings in constructors
module.exports.rules['constructor-super'] = 2;
// enforce the spacing around the * in generator functions
module.exports.rules['generator-star-spacing'] = [2, 'both'];
// disallow `await` inside of loops
module.exports.rules['no-await-in-loop'] = 0;
// disallow modifying variables of class declarations
module.exports.rules['no-class-assign'] = 2;
// disallow arrow functions where a condition is expected
module.exports.rules['no-confusing-arrow'] = 2;
// disallow modifying variables that are declared using const
module.exports.rules['no-const-assign'] = 2;
// disallow duplicate name in class members
module.exports.rules['no-dupe-class-members'] = 2;
// disallow duplicate module imports
module.exports.rules['no-duplicate-imports'] = 2;
// disallow use of the new operator with the Symbol object
module.exports.rules['no-new-symbol'] = 2;
// disallow specified modules when loaded by import
module.exports.rules['no-restricted-imports'] = 2;
// disallow to use this/super before super() calling in constructors.
module.exports.rules['no-this-before-super'] = 2;
// disallow unnecessary computed property keys in object literals
module.exports.rules['no-useless-computed-key'] = 2;
// disallow unnecessary constructor
module.exports.rules['no-useless-constructor'] = 2;
// disallow renaming import, export, and destructured assignments to the same name
module.exports.rules['no-useless-rename'] = 2;
// require let or const instead of var
module.exports.rules['no-var'] = 2;
// require method and property shorthand syntax for object literals
module.exports.rules['object-shorthand'] = [2, 'always'];
// suggest using arrow functions as callbacks
module.exports.rules['prefer-arrow-callback'] = 2;
// suggest using of const declaration for variables that are never modified after declared
module.exports.rules['prefer-const'] = 2;
// prefer destructuring from arrays and objects
module.exports.rules['prefer-destructuring'] = 2;
// disallow parseInt() in favor of binary, octal, and hexadecimal literals
module.exports.rules['prefer-numeric-literals'] = 2;
// suggest using Reflect methods where applicable (deprecated)
module.exports.rules['prefer-reflect'] = 0;
// suggest using the rest parameters instead of arguments
module.exports.rules['prefer-rest-params'] = 2;
// suggest using the spread operator instead of .apply()
module.exports.rules['prefer-spread'] = 2;
// suggest using template literals instead of strings concatenation
module.exports.rules['prefer-template'] = 2;
// disallow generator functions that do not have yield
module.exports.rules['require-yield'] = 2;
// enforce spacing between rest and spread operators and their expressions
module.exports.rules['rest-spread-spacing'] = [2, 'never'];
// enforce sorted import declarations within modules
module.exports.rules['sort-imports'] = 0;
// require symbol descriptions
module.exports.rules['symbol-description'] = 2;
// enforce spacing around embedded expressions of template strings
module.exports.rules['template-curly-spacing'] = [2, 'always'];
// enforce spacing around the * in yield* expressions
module.exports.rules['yield-star-spacing'] = [2, 'both'];
