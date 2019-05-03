const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const devMode = process.env.NODE_ENV === 'development'

const config = {
  mode: process.env.NODE_ENV,
  context: path.join(__dirname, 'src'),
  devServer: {
    contentBase: path.join(__dirname, 'www'),
    compress: true,
    port: 9000
  },
  stats: {
    warnings: false
  }
}

const jsConfig = Object.assign({}, config, {
  entry: ['./main.js'],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
  },
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
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
})

const cssConfig = Object.assign({}, config, {
  entry: ['./stylesheets/main.scss'],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.css'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: devMode }
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
})

module.exports = [jsConfig, cssConfig]
