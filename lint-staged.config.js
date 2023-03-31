const eslint = 'eslint --fix';
const prettier = 'prettier --write --ignore-unknown';
const checkLockfile = () => 'yarn install --immutable'; // Avoids forgetting to update yarn.lock

module.exports = {
  'package.json': [checkLockfile, prettier],
  'yarn.lock': [checkLockfile, prettier],
  '*.{js,jsx,ts,tsx}': [eslint, prettier],
  '*': prettier,
};
