const webpack = require('webpack')

const { setConfig } = require('../../src/libs/config')
const { getProdConfig } = require('../../src/webpack/webpack.prod.config')

exports.command = 'serve'
exports.desc =
  'Build the app for distribution purposes and starts a local server with assets'
exports.aliases = ['serve']
exports.builder = {
  device: {
    describe: 'Device build we want to serve for',
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
