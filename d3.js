'use strict';
var mainConfig = require('./es5');
var idLengthOptions = mainConfig.rules['id-length'][1];
var idMatchOptions = mainConfig.rules['id-match'][2];
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
      '^([A-Za-z]*([dD]3)?[A-Za-z]*|([A-Z]|(D3))[A-Z_]*((D3)?[A-Z_]*[A-Z]|D3))$',
      idMatchOptions,
    ],
  },
};
