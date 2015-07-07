'use strict';
module.exports = function browser(config) {

    config.env.node = false;
    config.env.browser = true;

    return config;
};
