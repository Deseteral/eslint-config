# Deseteral ESLint config

> Customized Airbnb ESLint configuration for JavaScript and TypeScript projects

## Usage
First you gotta install it:
```sh
npm i --save-dev eslint @deseteral/eslint-config
```

Then you gotta setup your `.eslintrc` to extend that config:
```json
{
  "extends": "@deseteral/eslint-config"
}
```

...or if you're using TypeScript:
```json
{
  "extends": "@deseteral/eslint-config/typescript"
}
```

The last thing you have to do is put linting script in your project's `package.json`:
```json
"scripts": {
  "lint": "eslint src --ext js,jsx,ts,tsx"
}
```

## Changelog

### [3.0.2] - 2020-10-06
#### Fixed
- Fixed false-positive `no-use-before-define` when using TypeScript

### [3.0.1] - 2020-10-04
#### Fixed
- Fixed false-positive `no-unused-expressions` when using optional call expressions in TypeScript

### [3.0.0] - 2020-10-03
#### Changed
- Upgraded ESLint version
- Upgraded Airbnb config
- Enabled rules of Hooks
- Allowed using `_id` as variable name (for MongoDB `ObjectID` representation)
#### Fixed
- Fixed false-positive `Cannot read property 'map' of undefined` errors for TypeScript

### [2.0.1] - 2019-12-31
#### Fixed
- Disabled `import/extensions` for TypeScript projects

### [2.0.0] - 2019-12-31
#### Changed
- Upgraded ESLint version
- Upgraded Airbnb config
- Enabled TypeScript extensions for `import/extensions` rule

### [1.3.1] - 2019-05-08
#### Fixed
- Babel parser is now in dependencies not dev dependencies.

### [1.3.0] - 2019-05-08
#### Changed
- ESLint is now using Babel as its code parser.

### [1.2.0] - 2019-04-03
#### Added
- Rule specifing use of operator linebreak.

### [1.1.0] - 2019-03-10
#### Added
- JSX is now allowed in files with `.tsx` extension.

### [1.0.0] - 2019-02-24
- Initial release.


## License
This project is licensed under the [MIT license](LICENSE).
