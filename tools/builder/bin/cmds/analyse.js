const webpack = require('webpack')

const { setConfig } = require('../../src/libs/config')
const { getAnalyseConfig } = require('../../src/webpack/webpack.analyse.config')
const {
  webpackErrorHandler,
} = require('../../src/webpack/webpack.errorhandler')
const { buildModes, devices } = require('../../src/constants')

exports.command = 'analyse'
exports.desc =
  'Build the app for distribution purposes and generate analysis reports'
exports.aliases = ['analyse']
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
  const webpackAnalyseConfig = getAnalyseConfig()
  webpack(webpackAnalyseConfig, webpackErrorHandler)
}
