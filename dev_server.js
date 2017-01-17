var path = require('path');
var express = require('express');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var config = require('./webpack.config');

var compiler = webpack(config);
var port = process.env.PORT || 3000;

var server = new WebpackDevServer(compiler, {
  // webpack-dev-server options
  //contentBase: "http://localhost:3000/",
  hot: true,
  setup: function (app) {
    // app.get('*', (req, res) => {
    //   res.sendFile(path.join(__dirname, req.path));
    // });
  },

  // webpack-dev-middleware options  
  //stats: { colors: true },
  // It's a required option.
  publicPath: config.output.publicPath

});
server.listen(3000, "localhost", err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});


// var app = express();


// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath,
//   hot: false,
//   inline: true
// }));

// app.use(require('webpack-hot-middleware')(compiler, {
//     hot: true,
//     inline: true
// }));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, req.path));
// });

// app.listen(port, 'localhost', err => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(`Listening at http://localhost:${port}`);
// });