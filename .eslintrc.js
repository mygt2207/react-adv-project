module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    '@typescript-eslint/indent': ['error', 2],

    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/naming-convention': 'warn',
  },
  globals: {
    __IS_DEV__: true,
  },
};
