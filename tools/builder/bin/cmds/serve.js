const webpack = require('webpack')

const { setConfig } = require('../../src/libs/config')
const { getProdConfig } = require('../../src/webpack/webpack.prod.config')

const { buildModes, devices } = require('../../src/constants')
const {
  webpackErrorHandler,
} = require('../../src/webpack/webpack.errorhandler')
const server = require('../../src/server')

exports.command = 'serve'
exports.desc =
  'Build the app for distribution purposes and starts a local server with assets'
exports.aliases = ['serve']
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
  const webpackProdConfig = getProdConfig()
  webpack(
    webpackProdConfig,
    webpackErrorHandler(() => {
      server.start()
    }),
  )
}
