module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['react', 'react-native', 'prettier', 'flowtype', 'jest'],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
    useJSXTextNode: false,
  },
  env: {
    'react-native/react-native': true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
    'plugin:flowtype/recommended',
    'plugin:jest/recommended',
    '@react-native-community',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 0,
  },
};
