const webpack = require('webpack')

const { setConfig } = require('../../src/libs/config')
const { getProdConfig } = require('../../src/webpack/webpack.prod.config')
const {
  webpackErrorHandler,
} = require('../../src/webpack/webpack.errorhandler')
const { buildModes } = require('../../src/constants')

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
  mode: {
    describe: 'Specify the build mode for the output',
    type: 'string',
    alias: 'b',
    default: buildModes.assets,
    choices: Object.keys(buildModes),
  },
}

exports.handler = ({ device, mode }) => {
  // eslint-disable-next-line no-console
  console.log(`Building for ${device} in mode ${mode} `)
  setConfig({ device, buildMode: mode })
  const webpackProdConfig = getProdConfig()
  webpack(webpackProdConfig, webpackErrorHandler)
}
