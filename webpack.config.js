const path = require('path')
const webpack = require('webpack')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js'
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'www'),
    compress: true,
    port: 9000
  },
  stats: {
    warnings: false
  }
}
