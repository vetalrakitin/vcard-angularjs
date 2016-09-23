const path               = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'main'  : './src/app.js'
  },
  output: {
    path    : './dist/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
})
  ],
  resolve: {
    extensions: ['', '.js']
  },
  loaders: [
  {
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/
  }
],
  devServer: {
    contentBase: 'src',
    historyApiFallback: true
  },
  devtool: 'source-map'
};
