'use strict';
module.exports = require('./es6');


module.exports.rules['babel/generator-star-spacing'] = module.exports.rules['generator-star-spacing'];
module.exports.rules['babel/new-cap'] = module.exports.rules['new-cap'];
module.exports.rules['babel/array-bracket-spacing'] = module.exports.rules['array-bracket-spacing'];
module.exports.rules['babel/object-curly-spacing'] = module.exports.rules['object-curly-spacing'];
module.exports.rules['babel/object-shorthand'] = module.exports.rules['object-shorthand'];
module.exports.rules['babel/arrow-parens'] = module.exports.rules['arrow-parens'];

module.exports.rules['generator-star-spacing']
 = module.exports.rules['new-cap']
 = module.exports.rules['array-bracket-spacing']
 = module.exports.rules['object-curly-spacing']
 = module.exports.rules['object-shorthand']
 = module.exports.rules['arrow-parens']
 = 0

module.exports.rules['babel/no-await-in-loop'] = 0;
module.exports.rules['babel/flow-object-type'] = 0;
module.exports.rules['babel/func-params-comma-dangle'] = [ 2, 'always-multiline' ];
