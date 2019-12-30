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

    // Rules that don't work well with TypeScript
    'lines-between-class-members': 'off',

    // TypeScript specific rules
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },
};
