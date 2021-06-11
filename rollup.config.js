import fs from 'fs'

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import injectProcessEnv from 'rollup-plugin-inject-process-env'
import copy from 'rollup-plugin-copy'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'
import css from 'rollup-plugin-css-only'

const OUT_DIR = 'build'
// NOTE: PRODUCTION BY DEFAULT!
const PROD = (process.env.NODE_ENV !== 'development')

const commonConfig = {
  input: 'src/main.js',
  output: {
    dir: `${OUT_DIR}/dist`,
    name: '{fileName}',
    sourcemap: !PROD,
    compact: PROD,
  },
  plugins: [
    copy({
      targets: [
        { src: 'public/*', dest: OUT_DIR },
      ],
    }),
    svelte({
      exclude: 'node_modules/**/*.js',
      compilerOptions: {
        dev: !PROD,
      }
    }),
    css({
      output(styles) {
        fs.appendFileSync(`${OUT_DIR}/global.css`, styles)
      },
    }),
    json(),
    resolve({
      browser: true,
      dedupe: ['svelte'],
      preferBuiltins: false,
    }),
    commonjs({
      // transformMixedEsModules: true,
    }),
    injectProcessEnv({
      NODE_ENV: process.env.NODE_ENV,
    }),
    (PROD && terser({
    })),
  ],
  watch: {
    clearScreen: false,
  },
};

// only contains ESM config :)
const esmConfig = Object.assign({}, commonConfig)
esmConfig.output = Object.assign({}, commonConfig.output, {
  dir: 'build/dist',
  format: 'esm'
})

let configurations = [
  esmConfig,
]

export default configurations
