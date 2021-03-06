const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'editable-list.js',
    publicPath: '/dist',
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      models: path.resolve(__dirname, 'src/models/'),
      utils: path.resolve(__dirname, 'src/utils/'),
    },
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
};
