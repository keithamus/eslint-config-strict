# eslint-config-strict

ESLint sharable config for strict linting.

## Installation

Install this config package and ESLint:

```bash
$ npm install --save-dev eslint-config-strict
```

If you're using npm < v3 you'll also need to install all of the dependencies of this project:

```bash
$ npm install --save-dev eslint eslint-plugin-filenames eslint-plugin-one-variable-per-var
```
If you're planning on using the React configs, you'll also need the React plugin:

```bash
$ npm install --save-dev eslint-plugin-react
```

## Usage

This set of configs is meant to be extended on a per-project basis as necessary
using ESLint's [shareable configs][] feature.

Configs are essentially divided up into two camps; `strict/es6/*` and `strict/es5/*`.
All variations exist in both ES6 and ES5 styles.

This package includes the following configurations:

- `strict/es5` (default configuration with ES6 rules disabled)
- `strict/es6` (default configuration including all ES6 rules)
- `strict/es6/react` (default rules with React rules added, requires `eslint-plugin-react`)
- `strict/es5/react` (like `strict/es6/mocha`, but with ES6 rules disabled)
- `strict/es6/mocha` (default rules with `env.mocha` true, `assert`, `expect`, `must` and `should` are globals, and `func-names` and `max-nested-callbacks` rules are disabled)
- `strict/es5/mocha` (like `strict/es6/mocha`, but with ES6 rules disabled)
- `strict/es6/browser` (default rules, but `env.node` is false and `env.browser` true)
- `strict/es5/browser` (like `strict/es6/browser`, but with ES6 rules disabled)

There are also some convenient aliases:

- `strict` (alias for `strict/es6`)
- `strict/browser` (alias for `strict/es5/browser`)
- `strict/test` (alias for `strict/es6/mocha`)
- `strict/mocha` (alias for `strict/es6/mocha`)
- `strict/react` (alias for `strict/es6/react`)

### How to use

Simply define your `.eslintrc` like so:

```json
{
  "extends": "strict"
}
```

Also, you can define a `test/.eslintrc` and use the following:

```json
{
  "extends": "strict/es6/test"
}
```

If your project is a front-end project, you will need an `.eslintrc` that looks
like this:

```json
{
  "extends": "strict/es5/browser"
}
```

Feel free to define additional globals or rules, or override them as you see fit:

```json
{
  "extends": "strict/es6/browser",

  "globals": {
    "blarg": true
  },

  "rules": {
      "eol-last": 0
  }
}
```

For more details about how shareable configs work, see the [ESLint documentation][shareable configs].

[shareable configs]: http://eslint.org/docs/developer-guide/shareable-configs
