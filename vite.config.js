/** EXTERNALS **/


import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
const path = require('path');


/** LOCALS **/


/** HELPERS **/

const alias = [
    {
        find: '@',
        replacement: path.resolve(__dirname, './src')
    },
];


/** MAIN **/


export default defineConfig({
    plugins: [solidPlugin()],
    build: {
        target: "esnext",
        polyfillDynamicImport: false,
    },
    resolve:{
        alias,
    },
});
