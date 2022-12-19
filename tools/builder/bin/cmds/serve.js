const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const { setConfig } = require('../../src/libs/config')
const { getProdConfig } = require('../../src/webpack/webpack.prod.config')
const {
  getProdServerConfig,
} = require('../../src/webpack/webpack.prodServer.config')

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
  setConfig({ device, devServer: { static: '' } })
  const webpackProdConfig = getProdConfig()
  const serverConfig = getProdServerConfig()
  const server = new WebpackDevServer(serverConfig, webpack(webpackProdConfig))
  server.start()
}
