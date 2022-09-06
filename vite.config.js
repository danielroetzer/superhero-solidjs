/** EXTERNALS **/

import path from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import eslintPlugin from 'vite-plugin-eslint';
import mpaPlugin from 'vite-plugin-mpa';

/** LOCALS **/

/** HELPERS **/

const alias = [
    {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
    },
];

const mpaSettings = {
    open: 'home/index.html',
    scanFile: 'index.{js,jsx}',
};

/** MAIN **/

export default defineConfig(function ({ mode }) {
    return {
        base: mode === 'ghpages' ? '/superhero-solidjs/' : '/',
        plugins: [solidPlugin(), eslintPlugin()],
        build: {
            target: 'esnext',
            polyfillDynamicImport: false,
            rollupOptions: {
                input: {
                    main: path.resolve(__dirname, 'index.html'),
                    about: path.resolve(__dirname, 'about/index.html'),
                    // index: 'index.html',
                    // 'tierlist/index': 'src/pages/Tierlist/index.jsx',
                    // 'about/index': 'src/pages/About/index.jsx',
                },
            },
        },
        resolve: {
            alias,
        },
    };
});
