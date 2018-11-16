import pkg from './package.json'
import vue from 'rollup-plugin-vue'
import npm from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'
import { uglify } from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

export default {
  input: 'src/index.js',
  output: {
    file: pkg.main,
    format: 'umd',
    name: 'nui',
    globals: {
      jquery: 'jQuery'
    }
  },
  external: [
    'jquery'
  ],
  plugins: [
    vue(),
    npm({
      jsnext: true,  // if provided in ES6
      main: true,  // if provided in CommonJS
      browser: true  // if provided for browsers
    }),
    buble(),
    // uglify({}, minify)
  ]
}
