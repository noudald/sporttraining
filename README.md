# Sport Training
A simple javascript project to generate your personalized sport training for swimming, cycling, or running


## Development

For code style we enforce airbnb, https://github.com/airbnb/javascript, code styling.
To ensure the code styling we use ESLint for validation. Install ESLint
```
npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import
```
Check all javascript code with
```
./node_modules/.bin/eslint --ext js src
```
To check for html validation we use `html5validator`, which can be installed with
```
pip install html5validator
```
To validate your html5 code run
```
html5validator path/to/file.html
```
