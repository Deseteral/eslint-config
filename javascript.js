module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  rules: {
    'object-curly-newline': ['error', { consistent: true }],
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'function-paren-newline': ['error', 'consistent'],

    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',

    'react/prop-types': 'off',
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    'react/jsx-one-expression-per-line': 'off',
  },
};
