'use strict';
module.exports = {

  env: {
    mocha: true,
  },

  globals: {
    // Common assertion library globals
    assert: false,
    should: false,
    must: false,
    expect: false,
  },

  // Rules that are a hassle to have enforced for Mocha & co
  rules: {
    // disallow the use of magic numbers
    'no-magic-numbers': 0,
    // require function expressions to have a name
    'func-names': 0,
    // Blacklist certain identifiers to prevent them being used
    'id-blacklist': 0,
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 0,
    // enforce newline after each call when chaining the calls
    'newline-per-chained-call': 0,
    // enforce padding within blocks
    'padded-blocks': 0,
  },

};
