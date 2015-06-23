module.exports = require('./defaults');

module.exports.plugins.push('react');
module.exports.ecmaFeatures.jsx = true;

// Disallow undeclared variables in JSX
module.exports.rules['jsx-no-undef'] = 2;

// Enforce quote style for JSX attributes
module.exports.rules['jsx-quotes'] = [2, 'double'];

// Prevent React to be incorrectly marked as unused
module.exports.rules['jsx-uses-react'] = 2;

// Prevent variables used in JSX to be incorrectly marked as unused
module.exports.rules['jsx-uses-vars'] = 2;

// Prevent usage of setState in componentDidMount
module.exports.rules['no-did-mount-set-state'] = [2, 'allow-in-func'];

// Prevent usage of setState in componentDidUpdate
module.exports.rules['no-did-update-set-state'] = 2;

// Prevent multiple component definition per file
module.exports.rules['no-multi-comp'] = 2;

// Prevent usage of unknown DOM property
module.exports.rules['no-unknown-property'] = 2;

// Prevent missing props validation in a React component definition
module.exports.rules['prop-types'] = 2;

// Prevent missing React when using JSX
module.exports.rules['react-in-jsx-scope'] = 2;

// Prevent extra closing tags for components without children
module.exports.rules['self-closing-comp'] = 2;

// Enforce component methods order
module.exports.rules['sort-comp'] = 2;

// Prevent missing parentheses around multiline JSX
 module.exports.rules['wrap-multilines'] = 2;
