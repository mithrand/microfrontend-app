const webpack = require('webpack')
const { merge } = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { getCommonConfig } = require('./webpack.common.config')

const { resolveInContext } = require('../libs/utils')

const getDevConfig = () => {
  const common = getCommonConfig()
  return merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
      filename: '[name].bundle.js',
      path: resolveInContext('./dist'),
      publicPath: '/',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolveInContext('./public/index.html'),
      }),
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"',
      }),
    ],
  })
}

module.exports = {
  getDevConfig,
}
