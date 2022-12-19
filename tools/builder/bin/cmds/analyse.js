const webpack = require('webpack')

const { setConfig } = require('../../src/libs/config')
const { getAnalyseConfig } = require('../../src/webpack/webpack.analyse.config')
const {
  webpackErrorHandler,
} = require('../../src/webpack/webpack.errorhandler')

exports.command = 'analyse'
exports.desc =
  'Build the app for distribution purposes and generate analysis reports'
exports.aliases = ['analyse']
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
  const webpackAnalyseConfig = getAnalyseConfig()
  webpack(webpackAnalyseConfig, webpackErrorHandler)
}
