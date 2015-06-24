module.exports = require('./defaults');

// enforce the spacing around the * in generator functions
module.exports.rules['generator-star-spacing'] = 0;
// require let or const instead of var
module.exports.rules['no-var'] = 0;
// require method and property shorthand syntax for object literals
module.exports.rules['object-shorthand'] = 0;
// suggest using of const declaration for variables that are never modified after declared
module.exports.rules['prefer-const'] = 0;
