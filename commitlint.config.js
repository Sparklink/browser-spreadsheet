module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules:{
    'header-max-length': [1, 'never', 72],
    'scope-case': [0, 'never'],
    'body-max-line-length': [0, 'never']
  }
};
