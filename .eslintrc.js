module.exports = {
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 8,
        allowImportExportEverywhere: true,
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
    },
};
