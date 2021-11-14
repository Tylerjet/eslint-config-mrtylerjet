require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['standard', 'prettier', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'array-callback-return': ['off']
  },
};
