module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: [
    '**/*/*.js',
    '*.js',
    '*.svg',
    '*.json',
    '*.png',
    '**/node_modules/**',
    'package.json',
    'package-lock.json',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', 'prettier'],
  env: {
    browser: true,
    node: true,
    es2021: true,
    'react-native/react-native': true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
  },
};
