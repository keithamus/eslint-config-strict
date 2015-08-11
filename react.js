'use strict';
module.exports = {
    plugins: [
        'react',
    ],

    ecmaFeatures: {
        jsx: true,
    },

    rules: {
        // Disallow undeclared variables in JSX
        'react/jsx-no-undef': 2,
        // Enforce quote style for JSX attributes
        'react/jsx-quotes': [2, 'double'],
        // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-react': 2,
        // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars': 2,
        // Prevent usage of setState in componentDidMount
        'react/no-did-mount-set-state': [2, 'allow-in-func'],
        // Prevent usage of setState in componentDidUpdate
        'react/no-did-update-set-state': 2,
        // Prevent multiple component definition per file
        'react/no-multi-comp': 2,
        // Prevent usage of unknown DOM property
        'react/no-unknown-property': 2,
        // Prevent missing props validation in a React component definition
        'react/prop-types': 2,
        // Prevent missing React when using JSX
        'react/react-in-jsx-scope': 2,
        // Prevent extra closing tags for components without children
        'react/self-closing-comp': 2,
        // Enforce component methods order
        'react/sort-comp': 2,
        // Prevent missing parentheses around multiline JSX
        'react/wrap-multilines': 2,
    },
};
