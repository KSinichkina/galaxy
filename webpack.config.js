var webpack = require('webpack');

module.exports = {
  context: __dirname + 'src/',
  entry: __dirname + 'src/' + 'app.js',
  output: {
    path: __dirname + '/dist',
	filename: '[name].js'

  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css'},
	  { test: /\.css$/, loader: "style-loader!css-loader?root=." },
	  { test: /png|jpg|svg|ttf|eot|woff|woff2\.()$/, loader: 'file?name=[path][name].[ext]' },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
	  {	test: /\.html$/, loader: 'mustache'
        // loader: 'mustache?minify'
        // loader: 'mustache?{ minify: { removeComments: false } }'
        // loader: 'mustache?noShortcut'
   	  }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components', 'web_modules']
  }
};