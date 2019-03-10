const jsConfig = require('./javascript');

module.exports = Object.assign({}, jsConfig, {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    jsx: true,
  },
  plugins: ['@typescript-eslint'],
  rules: Object.assign({}, jsConfig.rules, {
    // Rules handled by TS type checker
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'import/no-unresolved': 'off',

    // Rules that don't work well with TypeScript
    'lines-between-class-members': 'off',

    // TypeScript specific rules
    "react/jsx-filename-extension": ['error', { "extensions": [".jsx", ".tsx"] }]
  }),
});
