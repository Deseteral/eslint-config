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

### [1.1.0] - 2019-03-10
#### Added
- JSX is now allowed in files with `.tsx` extension.

### [1.0.0] - 2019-02-24
- Initial release.


## License
This project is licensed under the [MIT license](LICENSE).
