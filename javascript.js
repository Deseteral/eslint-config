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
    'dot-notation': 'off',
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    'react/jsx-one-expression-per-line': 'off',
  },
};
