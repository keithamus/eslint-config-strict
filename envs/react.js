'use strict';
module.exports = function browser(config) {

    config.plugins.push('react');
    config.ecmaFeatures.jsx = true;

    // Disallow undeclared variables in JSX
    config.rules['react/jsx-no-undef'] = 2;

    // Enforce quote style for JSX attributes
    config.rules['react/jsx-quotes'] = [2, 'double'];

    // Prevent React to be incorrectly marked as unused
    config.rules['react/jsx-uses-react'] = 2;

    // Prevent variables used in JSX to be incorrectly marked as unused
    config.rules['react/jsx-uses-vars'] = 2;

    // Prevent usage of setState in componentDidMount
    config.rules['react/no-did-mount-set-state'] = [2, 'allow-in-func'];

    // Prevent usage of setState in componentDidUpdate
    config.rules['react/no-did-update-set-state'] = 2;

    // Prevent multiple component definition per file
    config.rules['react/no-multi-comp'] = 2;

    // Prevent usage of unknown DOM property
    config.rules['react/no-unknown-property'] = 2;

    // Prevent missing props validation in a React component definition
    config.rules['react/prop-types'] = 2;

    // Prevent missing React when using JSX
    config.rules['react/react-in-jsx-scope'] = 2;

    // Prevent extra closing tags for components without children
    config.rules['react/self-closing-comp'] = 2;

    // Enforce component methods order
    config.rules['react/sort-comp'] = 2;

    // Prevent missing parentheses around multiline JSX
     config.rules['react/wrap-multilines'] = 2;

    return config;
};
