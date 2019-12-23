import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    file: 'dist/nyre.esm.js',
    format: 'es',
    name: 'Nyre'
  }
})

export default config

