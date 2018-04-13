const path = require('path');
// const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: {
      bundle: './src/js/app.js'
    },
    output: {
      path: path.resolve(path.join(__dirname, 'dist/assets/js')),
      filename: '[name].js'
    },
    devServer: {
      contentBase: path.resolve(path.join(__dirname, 'dist')),
      port: 9000
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: [
            'babel-loader',
            'eslint-loader'
          ],
          include: path.join(__dirname, 'src')
        }
      ]
    },
    devtool: 'source-map',
    plugins: []
  }
];
