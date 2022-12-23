const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const { setConfig } = require('../../src/libs/config')
const { getDevConfig } = require('../../src/webpack/webpack.dev.config')
const {
  getDevServerConfig,
} = require('../../src/webpack/webpack.devServer.config')
const { buildModes, devices } = require('../../src/constants')

exports.command = 'start'
exports.desc = 'Start the app for development purposes in a stand alone mode'
exports.aliases = ['start']
exports.builder = {
  device: {
    describe: 'Device build we want to build for',
    type: 'string',
    alias: 'd',
    default: devices.desktop,
    choices: Object.keys(devices),
  },
  mode: {
    describe: 'Specify the build mode for the output',
    type: 'string',
    alias: 'b',
    default: buildModes.assets,
    choices: Object.keys(buildModes),
  },
}

exports.handler = ({ device, mode }) => {
  setConfig({ device, mode })
  const webpackDevConfig = getDevConfig()
  const serverConfig = getDevServerConfig()
  const server = new WebpackDevServer(serverConfig, webpack(webpackDevConfig))
  server.start()
}
