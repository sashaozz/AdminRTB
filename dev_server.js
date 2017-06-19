var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var config = require('./webpack.config');
var compiler = webpack(config);
var port = process.env.PORT || 3000;

var server = new WebpackDevServer(compiler, {
  hot: true,
  setup: function (app) {
    // app.get('*', (req, res) => {
    //   res.sendFile(path.join(__dirname, req.path));
    // });
  },

  // webpack-dev-middleware options  
  stats: { colors: true },
  // It's a required option.
  publicPath: config.output.publicPath

});
server.listen(port, "localhost", err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});