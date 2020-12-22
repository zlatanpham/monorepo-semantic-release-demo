module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['apple', 'orange', 'release']],
    'scope-empty': [1, 'never'],
    'scope-case': [2, 'always', ['lower-case']],
    'header-max-length': [2, 'always', 72], // github commit without being trucated
  },
};
