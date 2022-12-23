const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')

const { getConfig } = require('../libs/config')
const {
  resolveInContext,
  requireInContext,
  sanitizeFileName,
} = require('../libs/utils')

const { getCommonConfig } = require('./webpack.common.config')
const { buildModes } = require('../constants')

const packageJson = requireInContext('./package.json')

const getProdConfig = () => {
  const common = getCommonConfig()
  const { mode } = getConfig()
  const buildLibrary = mode === buildModes.library
  return merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
      path: resolveInContext('./dist'),
      filename: sanitizeFileName(`${packageJson.name}.[hash].js`),
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
