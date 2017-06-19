'use strict';

exports.reacthot = {
  test: /\.tsx?$/,
  loader: 'react-hot-loader',
  exclude: /node_modules/,
};

// exports.tsx = {
//   test: /\.tsx?$/,
//   loader: 'ts-loader',
//   exclude: /node_modules/,
// };

exports.tsx = {
  test: /\.tsx?$/,
  loader: 'awesome-typescript-loader',
  exclude: /node_modules/,
};

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  exclude: /node_modules/,
};

exports.css = {
  test: /\.css$/,
  loader: 'style-loader!css?-minimize!postcss',
  exclude: /node_modules/,
};

exports.json = {
  test: /\.json$/,
  loader: 'json',
};

// exports.js = {
//   test: /\.js$/,
//   exclude: /node_modules/,
//   loader: 'babel-loader'
// };

exports.svg = makeUrlLoader(/\.svg$/);
exports.eot = makeUrlLoader(/\.eot$/);
exports.woff = makeUrlLoader(/\.woff$/);
exports.woff2 = makeUrlLoader(/\.woff2$/);
exports.ttf = makeUrlLoader(/\.ttf$/);

function makeUrlLoader(pattern) {
  return {
    test: pattern,
    loader: 'url',
    exclude: /node_modules/,
  };
}
