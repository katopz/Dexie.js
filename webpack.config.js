var webpack = require('webpack')
var env = process.env.NODE_ENV || 'production'
var isProd = env === 'production'

var plugins = [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
    compress: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      screw_ie8: true,
      warnings: false,
      sequences: true,
      dead_code: true,
      conditionals: true,
      booleans: true,
      unused: true,
      if_return: true,
      join_vars: true,
      drop_console: true
    },
    comments: false,
    sourceMap: true
		}),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(env)
  })
]

module.exports = {
  entry: './src/Dexie.js',
  output: {
    path: 'dist/',
    filename: isProd ? 'dexie.min.js' : 'dexie.js',
    library: 'dexie',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel', exclude: /node_modules/,
        query: {
          plugins: ['syntax-async-functions', 'transform-regenerator'],
          presets: ['es2015', 'stage-3']
        }
      }
    ]
  }
}