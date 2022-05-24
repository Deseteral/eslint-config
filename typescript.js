/* eslint-disable quote-props */
const jsConfig = require('./javascript');

module.exports = {
  ...jsConfig,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    jsx: true,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    ...jsConfig.rules,

    // Rules handled by TS type checker
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/require-default-props': 'off',

    // Rules that don't work well with TypeScript
    'lines-between-class-members': 'off',

    // ESLint built-in rules that are replaced by their TypeScript equivalent
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],

    // TypeScript specific rules
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    '@typescript-eslint/type-annotation-spacing': 'error',
  },
};
