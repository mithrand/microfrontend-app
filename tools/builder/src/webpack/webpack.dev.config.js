const webpack = require('webpack')
const { merge } = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { getCommonConfig } = require('./webpack.common.config')

const {
  resolveInContext,
  sanitizeFileName,
  requireInContext,
} = require('../libs/utils')

const packageJson = requireInContext('./package.json')

const getDevConfig = () => {
  const common = getCommonConfig()
  return merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
      filename: sanitizeFileName(`${packageJson.name}.js`),
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
