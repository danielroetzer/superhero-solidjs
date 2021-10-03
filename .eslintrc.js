module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                ],
                extensions: ['.jsx', '.js'],
            },
        },
    },
    plugins: ['solid'],
    extends: ['eslint:recommended', 'airbnb-base', 'plugin:solid/recommended'],
    rules: {
        indent: ['error', 4],
        'spaced-comment': ['error', 'always', {
            block: {
                exceptions: ['*'],
                balanced: true,
            },
        }],
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: ['.eslintrc.js', 'vite.config.js'],
        }],
        'prefer-arrow-callback': 0,
        'func-names': 0,
    },
};
