import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'

const config = require('../package.json')
const tsConfig = require('../tsconfig.json')

const extensions = [
  '.js', '.jsx', '.ts', '.tsx'
]

export default {
  input: 'src/index.ts',

  plugins: [
    resolve({
      extensions,
      mainFields: ['main', 'module', 'jsnext']
    }),
    commonjs(),
    typescript({
      ...tsConfig.compilerOptions,
      typescript: require('typescript')
    }),
    babel({
      extensions,
      include: ['src/**/*']
    }),
    replace({
      VERSION: JSON.stringify(config.version)
    })
  ]
}
