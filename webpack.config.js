'use strict';

const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

const applicationEntries = process.env.NODE_ENV === 'development'
  ? [  
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
  ]
  : [];

module.exports = {
  entry: [
    'babel-polyfill','./src/index.tsx'
  ].concat(applicationEntries),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/static/',
    sourceMapFilename: 'app.js.map'
  },

  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' :
    'inline-source-map',

  resolve: {
    extensions: [      
      '.webpack.js',
      '.web.js',
      '.tsx',
      '.ts',
      '.js',
      '.json',
    ],
  },

  plugins: plugins,

  devServer: {
    historyApiFallback: { index: '/' }
  },

  module: {
    loaders: [
      loaders.reacthot,
      loaders.tsx,
      loaders.html,
      loaders.css,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
      loaders.json,
    ],
  },

  externals: {
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
  }
};
