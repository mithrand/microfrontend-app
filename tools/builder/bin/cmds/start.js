const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const { setConfig } = require('../../src/libs/config')
const { getDevConfig } = require('../../src/webpack/webpack.dev.config')
const { getServerConfig } = require('../../src/webpack/webpack.server.config')

exports.command = 'start'
exports.desc = 'Start the app for development purposes in a stand alone mode'
exports.aliases = ['start']
exports.builder = {
  device: {
    describe: 'Device build we want to start',
    type: 'string',
    alias: 'd',
    default: 'desktop',
    choices: ['desktop', 'tablet', 'mobile'],
  },
}

exports.handler = ({ device }) => {
  setConfig({ device })
  const webpackDevConfig = getDevConfig()
  const serverConfig = getServerConfig()
  const server = new WebpackDevServer(serverConfig, webpack(webpackDevConfig))
  server.start()
}
