
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
// import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'scripts/main.js',
  format: 'iife',
  dest: 'public/scripts.js',
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    // commonjs({
    //   include: 'node_modules/**'
    // }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
