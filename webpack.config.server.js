const path = require('path');

const nodeExternals = require('webpack-node-externals');

const sharedConfig = require('./webpack.config.shared');

module.exports = {
  ...sharedConfig,

  target: 'node',
  entry: './src/server/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      { test: /\.html$/, use: ['html-loader'] },
      { test: /\.(sc|sa|c)ss$/, use: ['ignore-loader'] },
    ],
  },
};
