/** EXTERNALS **/

import path from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import eslintPlugin from 'vite-plugin-eslint';

/** LOCALS **/

/** HELPERS **/

const alias = [
    {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
    },
];

/** MAIN **/

export default defineConfig({
    plugins: [solidPlugin(), eslintPlugin()],
    build: {
        target: 'esnext',
        polyfillDynamicImport: false,
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, 'index.html'),
                about: path.resolve(__dirname, 'about/index.html'),
                tierlist: path.resolve(__dirname, 'tierlist/index.html'),
            },
        },
    },
    resolve: {
        alias,
    },
});
