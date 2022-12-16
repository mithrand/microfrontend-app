const webpack = require('webpack')

const { setConfig } = require('../../src/libs/config')
const { getProdConfig } = require('../../src/webpack/webpack.prod.config')

exports.command = 'build'
exports.desc = 'Build the app for distribution purposes'
exports.aliases = ['build']
exports.builder = {
  device: {
    describe: 'Device build we want to build for',
    type: 'string',
    alias: 'd',
    default: 'desktop',
    choices: ['desktop', 'tablet', 'mobile'],
  },
}

exports.handler = ({ device }) => {
  setConfig({ device })
  const webpackProdConfig = getProdConfig()
  webpack(webpackProdConfig)
}
