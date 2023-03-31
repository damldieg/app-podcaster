const readdirSync = require('fs').readdirSync;
const path = require('path');

const scopeOptions = readdirSync(path.resolve(__dirname, 'src')).filter(
  (option) => !option.includes('.'),
);

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [2, 'always', ['lower-case', 'pascal-case', 'camel-case']],
    'scope-enum': [
      2,
      'always',
      [...scopeOptions, 'podcaster', 'config', 'deps', 'other'],
    ],
    'header-max-length': [2, 'always', 130],
  },
};
