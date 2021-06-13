const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'web',
  devtool: 'source-map',
  entry: ['./src/index.jsx', './src/styles/index.scss'],

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, './src/assets/'),
      components: path.resolve(__dirname, './src/components/'),
      constants: path.resolve(__dirname, './src/constants/'),
      pages: path.resolve(__dirname, './src/pages/'),
      styles: path.resolve(__dirname, './src/styles/'),
      utils: path.resolve(__dirname, './src/utils/'),
    },
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
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
