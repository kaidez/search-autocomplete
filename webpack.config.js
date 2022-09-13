const path = require('path');

module.exports = {
  mode: 'none',
  entry: './out/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  resolve: {
    // Add `.ts` as a resolvable extension.
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: '/.(js|ts)$/',
        exclude: [/node_modules/, '/src/tests'],
      },
    ],
  },
};
