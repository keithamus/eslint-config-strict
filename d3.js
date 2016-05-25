'use strict';
var mainConfig = require('./es5');
var idLengthOptions = mainConfig.rules['id-length'][1];
module.exports = {
  rules : {
    'id-length': [
      2,
      {
        'min': idLengthOptions.min,
        'max': idLengthOptions.max,
        'exceptions': idLengthOptions.exceptions.concat([ 'd', 'dx', 'dy', 'd3' ]),
      },
    ],
    'id-match': [
      2,
      // identifiers must always be camel cased, unless they are all caps
      // they may not include numbers, except as a part of the phrase "d3"
      '^([A-Za-z]*([dD]3)?[A-Za-z]*|[A-Z][A-Z_]*((D3)?[A-Z_]*[A-Z]|D3))$',
      {
        // identifiers in properties are also checked
        'properties': true,
      },
    ],
  },
};
