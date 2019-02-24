const jsConfig = require('./javascript');

module.exports = Object.assign({}, jsConfig, {
  parser: 'typescript-eslint-parser',
  parserOptions: {
    jsx: true,
  },
  plugins: [
    'typescript',
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'import/no-unresolved': 'off',
  },
});
