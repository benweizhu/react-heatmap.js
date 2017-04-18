var path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'ReactHeatmap.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx|.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }

};
