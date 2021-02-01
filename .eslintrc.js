module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:cypress/recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    cy: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['cypress', 'react'],
  rules: {
    'array-bracket-spacing': 'warn',
    'arrow-parens': ['error', 'always'],
    'brace-style': ['error', 'stroustrup'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    curly: ['error', 'all'],
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/newline-after-import': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.spec.js',
          '**/*.steps.js',
          'cypress/**/*.js',
          '**/test/**/*.js',
        ],
      },
    ],
    'import/no-dynamic-require': 'off',
    'import/no-named-as-default': 'off',
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/img-has-alt': 'off',
    'jsx-ally/label-has-for': 'off',
    'max-len': [
      'off',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'new-cap': 'warn',
    'newline-per-chained-call': 'off',
    'no-mixed-operators': 'off',
    'no-multi-assign': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [],
      },
    ],
    'no-plusplus': ['off'],
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'space-before-function-paren': 'off',
    'object-curly-spacing': 'off',
    'object-shorthand': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-one-expression-per-line': 'off',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    strict: 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: 'return' },
    ],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'app/src/'],
      },
    },
  },
};
