"use strict";

var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
  entry: [
    "./node_modules/reflect-metadata/Reflect",
    "./node_modules/zone.js/dist/zone",
    "./app/boot.ts"
  ],
  output: {
    publicPath: '/public/',
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    moduleDirectories: ['node_modules'],
    extensions: ["", ".js", ".ts"]
  },
  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ["", ".js", ".ts"]
  },
  watch: NODE_ENV == 'development',
  watchOptions: {
    aggregateTimeout: 300
  },
  devtool: NODE_ENV == 'development' ? 'source-map' : null,
  module: {
    loaders: [
      {
        test: /\.html$/,
        loaders: [
          "file-loader?name=[name].[ext]?[hash]",
          "html-loader?" + JSON.stringify({
            attrs: ["img:src", "img:ng-src"]
          })
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|eot|woff|woff2)$/i,
        loader: "file-loader",
        query: {
          name: '/img/[name].[ext]'
        }
      },
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ["style?sourceMap", "css?sourceMap?root=.", "sass?sourceMap"]
      },
      {
        test: /\.css$/,
        loaders: ["style?sourceMap?root=.", "css?sourceMap?root=."]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new ExtractTextPlugin("[name].css")
  ]
}
