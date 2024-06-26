module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    extends: [
        'airbnb',
        'prettier',
        'next/core-web-vitals',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/react-in-jsx-scope': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'react/prop-types': 'off',
        'no-nested-ternary': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/button-has-type': 'off',
        'jsx-a11y/media-has-caption': 'off',
        'arrow-body-style': 'off',
        'import/no-extraneous-dependencies': 'off',
        // 'import/extensions': [
        //   'error',
        //   'ignorePackages',
        //   {
        //     js: 'never',
        //     jsx: 'never',
        //   },
        // ],
    },
};