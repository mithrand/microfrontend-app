const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')

const { getConfig } = require('../libs/config')
const { resolveInContext } = require('../libs/utils')

const { getCommonConfig } = require('./webpack.common.config')
const { buildModes } = require('../constants')

const getProdConfig = () => {
  const common = getCommonConfig()
  const { buildMode } = getConfig()
  const buildLibrary = buildMode === buildModes.library
  return merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
      path: resolveInContext('./dist'),
      filename: 'index.js',
      ...(buildLibrary ? { libraryTarget: 'commonjs' } : {}),
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
