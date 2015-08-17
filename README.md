# eslint-config-strict

ESLint sharable config for strict linting.

## BREAKING CHANGES:

v3.0.0 changes the way configs are required in, as they are now stackable as per
[eslint's extend directive][extend].

v4.0.0 drops React support, it is now in its own plugin: [`eslint-config-strict-react`](https://github.com/keithamus/eslint-config-strict-react).

## Installation

Install this config package and ESLint:

```bash
$ npm install --save-dev eslint-config-strict
```

If you're using npm < v3 you'll also need to install all of the dependencies of this project:

```bash
$ npm install --save-dev eslint eslint-plugin-filenames
```

If you use React, also have a look at the [`eslint-config-strict-react`](https://github.com/keithamus/eslint-config-strict-react) plugin.

## Usage

This set of configs is meant to be extended on a per-project basis as necessary
using ESLint's [shareable configs][] feature.

To start, you probably want to use pick either `strict/es6` or `strict/es5` (note:
 `strict` can be used as an alias for `strict/es6`). You can then layer additional
 rulesets on top using eslint, the additive rules are:

This package includes the following configurations:

- `strict/react` (adds rules for React, requires `eslint-plugin-react`)
- `strict/mocha` (adds `env.mocha` true, `assert`, `expect`, `must` and `should` are
   added as globals, and `func-names`, `padded-blocks` and `max-nested-callbacks` rules
   are explicitly turned off)
- `strict/browser` (simply sets `env.browser` to true)

### How to use

Simply define your `.eslintrc` (or add a `eslintConfig` object to `package.json`)
like so:

```json
{
  "extends": ["strict"]
}
```

Add any additional plugins you want, for example:

```json
{
  "extends": ["strict", "strict/browser"]
}
```


Also, you can define a `test/.eslintrc` to override the projects main one:

```json
{
  "extends": ["strict", "strict/browser", "strict/mocha"]
}
```

If your project is a front-end project and you're not transpiling ES6 code, you
might have an `.eslintrc` that looks like this:

```json
{
  "extends": ["strict/es5", "strict/browser"]
}
```

Feel free to define additional globals or rules, or override them as you see fit:

```json
{
  "extends": ["strict"],

  "globals": {
    "blarg": true
  },

  "rules": {
      "eol-last": 0
  }
}
```

For more details about how shareable configs work, see the
[ESLint documentation][extend].

[shareable configs]: http://eslint.org/docs/developer-guide/shareable-configs
[extend]: http://eslint.org/docs/user-guide/configuring#extending-configuration-files
