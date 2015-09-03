'use strict';
module.exports = require('./es5');
module.exports.env = module.exports.env || {};
module.exports.rules = module.exports.rules || {};

module.exports.env.es6 = true;

module.exports.ecmaFeatures = {
    // enable parsing of arrow functions
    arrowFunctions: true,
    // enable parsing of binary literals
    binaryLiterals: true,
    // enable parsing of let/const
    blockBindings: true,
    // enable parsing classes
    classes: true,
    // enable parsing of default parameters
    defaultParams: true,
    // enable parsing of destructured arrays and objects
    destructuring: true,
    // enable parsing of for-of statement
    forOf: true,
    // enable parsing of generators/yield
    generators: true,
    // enable parsing of modules
    modules: true,
    // enable parsing computed object literal properties
    objectLiteralComputedProperties: true,
    // Allow duplicate object literal properties (except '__proto__')
    objectLiteralDuplicateProperties: true,
    // enable parsing of shorthand object literal methods
    objectLiteralShorthandMethods: true,
    // enable parsing of shorthand object literal properties
    objectLiteralShorthandProperties: true,
    // enable parsing of ES6 octal literals
    octalLiterals: true,
    // enable parsing of regular expression y flag
    regexYFlag: true,
    // enable parsing of regular expression u flag
    regexUFlag: true,
    // enable parsing of rest parameters
    restParams: true,
    // enable parsing spread operator
    spread: true,
    // enable super references inside of functions
    superInFunctions: true,
    // enable parsing of template strings
    templateStrings: true,
    // enable parsing unicode code point escape sequences
    unicodeCodePointEscapes: true,
    // enable return in global scope
    globalReturn: true,
    // enable React JSX parsing
    jsx: false,
};

// require parens in arrow function arguments
module.exports.rules['arrow-parens'] = [2, 'always'];
// require space before/after arrow function's arrow
module.exports.rules['arrow-spacing'] = [2, { before: true, after: true }];
// verify super() callings in constructors
module.exports.rules['constructor-super'] = 2;
// enforce the spacing around the * in generator functions
module.exports.rules['generator-star-spacing'] = [2, 'both'];
// disallow modifying variables of class declarations
module.exports.rules['no-class-assign'] = 2;
// disallow modifying variables that are declared using const
module.exports.rules['no-const-assign'] = 2;
// disallow duplicate name in class members
module.exports.rules['no-dupe-class-members'] = 2;
// disallow to use this/super before super() calling in constructors.
module.exports.rules['no-this-before-super'] = 2;
// require let or const instead of var
module.exports.rules['no-var'] = 2;
// require method and property shorthand syntax for object literals
module.exports.rules['object-shorthand'] = [2, 'always'];
// suggest using arrow functions as callbacks
module.exports.rules['prefer-arrow-callback'] = 2;
// suggest using of const declaration for variables that are never modified after declared
module.exports.rules['prefer-const'] = 2;
// suggest using the spread operator instead of .apply()
module.exports.rules['prefer-spread'] = 2;
// suggest using Reflect methods where applicable
module.exports.rules['prefer-reflect'] = 2;
// suggest using template literals instead of strings concatenation
module.exports.rules['prefer-template'] = 2;
// disallow generator functions that do not have yield
module.exports.rules['require-yield'] = 2;
