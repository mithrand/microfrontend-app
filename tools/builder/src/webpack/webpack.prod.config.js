const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')

const { requireInContext, resolveInContext } = require('../libs/utils')

const { getCommonConfig } = require('./webpack.common.config')

const packageJson = requireInContext('../package.json')

const getProdConfig = () => {
  const common = getCommonConfig()
  return merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
      path: resolveInContext('./dist'),
      filename: `[name].${packageJson.version}.[contenthash].bundle.js`,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
      }),
    ],
  })
}

module.exports = {
  getProdConfig,
}
