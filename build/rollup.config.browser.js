import base from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'

const config = Object.assign({}, base, {
  output: {
    file: 'dist/nyre.min.js',
    format: 'iife',
    name: 'Nyre'
  }
})

config.plugins.push(terser())

export default config
