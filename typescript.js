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

    // Rules that don't work well with TypeScript
    'lines-between-class-members': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',

    // Rules colliding with ESLint
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // TypeScript specific rules
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },
};
