module.exports = require('./defaults');

module.exports.env.es6 = false;
module.exports.ecmaFeatures.arrowFunctions =  false;
module.exports.ecmaFeatures.binaryLiterals =  false;
module.exports.ecmaFeatures.blockBindings =  false;
module.exports.ecmaFeatures.classes =  false;
module.exports.ecmaFeatures.defaultParams =  false;
module.exports.ecmaFeatures.destructuring =  false;
module.exports.ecmaFeatures.forOf =  false;
module.exports.ecmaFeatures.generators =  false;
module.exports.ecmaFeatures.modules =  false;
module.exports.ecmaFeatures.objectLiteralComputedProperties =  false;
module.exports.ecmaFeatures.objectLiteralDuplicateProperties =  false;
module.exports.ecmaFeatures.objectLiteralShorthandMethods =  false;
module.exports.ecmaFeatures.objectLiteralShorthandProperties =  false;
module.exports.ecmaFeatures.octalLiterals =  false;
module.exports.ecmaFeatures.regexYFlag =  false;
module.exports.ecmaFeatures.regexUFlag =  false;
module.exports.ecmaFeatures.restParams =  false;
module.exports.ecmaFeatures.spread =  false;
module.exports.ecmaFeatures.superInFunctions =  false;
module.exports.ecmaFeatures.templateStrings =  false;
module.exports.ecmaFeatures.unicodeCodePointEscapes =  false;

// verify super() callings in constructors
module.exports.rules['constructor-super'] = 0;
// enforce the spacing around the * in generator functions
module.exports.rules['generator-star-spacing'] = 0;
// disallow to use this/super before super() calling in constructors.
module.exports.rules['no-this-before-super'] = 0;
// require let or const instead of var
module.exports.rules['no-var'] = 0;
// require method and property shorthand syntax for object literals
module.exports.rules['object-shorthand'] = 0;
// suggest using of const declaration for variables that are never modified after declared
module.exports.rules['prefer-const'] = 0;
