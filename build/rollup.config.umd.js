import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    file: 'dist/nyre.umd.js',
    format: 'umd',
    name: 'Nyre'
  }
})

export default config
