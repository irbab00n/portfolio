const path = require('path');
const CLIENT_DIR = path.join(__dirname, '/client');
const PUBLIC_DIR = path.join(__dirname, '/public');

module.exports = {
  context: CLIENT_DIR,
  entry: `${CLIENT_DIR}/index.jsx`,
  output: {
    path: PUBLIC_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js||jsx)?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules');
    ]
  }
}