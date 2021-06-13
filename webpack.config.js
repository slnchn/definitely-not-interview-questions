const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.jsx', './src/styles/index.scss'],
  target: 'web',
  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {},
  },

  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: 'babel-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
    }),
    new MiniCssExtractPlugin({ filename: 'index.css' }),
  ],

  devServer: {
    port: 3000,
  },
};
