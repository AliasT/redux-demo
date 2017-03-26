var webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/app'
  },

  output: {
    filename: '[name].bundle.js',
    path: './build',
    publicPath: '/build'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
 	      test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}
