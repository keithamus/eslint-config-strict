'use strict';
module.exports = function browser(config) {

    config.env.mocha = true;

    // Common assertion library globals
    config.globals.assert = false;
    config.globals.should = false;
    config.globals.must = false;
    config.globals.expect = false;

    // Rules that are a hassle to have enforced for Mocha & co

    // require function expressions to have a name
    config.rules['func-names'] = 0;

    // specify the maximum depth callbacks can be nested
    config.rules['max-nested-callbacks'] = 0;

    return config;
};
