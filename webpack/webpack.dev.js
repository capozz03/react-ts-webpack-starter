const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.DEVELOPMENT': JSON.stringify(process.env.DEVELOPMENT)
    }),
    new ReactRefreshWebpackPlugin(),
  ]
}