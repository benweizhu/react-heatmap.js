var path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'ReactHeatmap.js',
    path: path.resolve(__dirname, 'dist')
  }
};