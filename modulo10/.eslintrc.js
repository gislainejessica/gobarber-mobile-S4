module.exports = {
  env: {
    es6: true
  },
  extends: [
    'standard',
    'prettier',
    'prettier/react'
  ],
  globals: {
    __DEV__: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures:{
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins:[
    'react',
    'prettier',
    'react-hooks',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension':[
      'warn', {extensions:['.jsx', '.js']}
    ],
    'import/prefer-export-default': 'off',
    "no-unused-vars": "off",
    "react/jsx-one-expression-per-line": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "no-console": ["error", { allow:["tron"]}],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps":"warn"


  }
}
