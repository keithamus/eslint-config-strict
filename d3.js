'use strict';
var mainConfig = require('./es5');
var idLengthOptions = mainConfig.rules['id-length'][1];
module.exports = {
  rules : {
    'id-length' : [
      2,
      {
        'min': idLengthOptions.min,
        'max': idLengthOptions.max,
        'exceptions': idLengthOptions.exceptions.concat([ 'd', 'dx', 'dy', 'r', 'cx', 'cy' ]),
      },
    ],
  },
};
