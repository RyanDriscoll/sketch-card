'use strict';

const webpack = require('webpack');

module.exports = {
  entry : './components/index.jsx',
  output: {
    path    : __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  module : {
    loaders: [
      {
        test   : /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader : 'babel',
        query  : {
          presets: [ 'react', 'es2015' ]
        }
      },
      {
        exclude: /node_modules/,

        loaders: [ 'style', 'css', 'postcss', 'sass' ],
        test   : /\.scss$/
      },
      {
        loaders: [ 'style', 'css', 'postcss' ],
        test   : /\.css$/
      },
    ],
    preLoaders: [
      {
        exclude: /node_modules/,
        loader : 'eslint',
        query  : {presets: [ 'react', 'latest' ]},
        test   : /\.jsx$/
      }
    ]

  }
};
