var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'backend.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    openPage:"./public/index.html",
    open: true,
  },
  externals: nodeModules
}