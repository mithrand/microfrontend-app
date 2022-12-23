const { merge } = require('lodash')
const { requireIfExist } = require('./utils')
const { buildModes } = require('../constants')

let config = {
  device: 'desktop',
  mode: buildModes.assets,
  devServer: {
    port: 3000,
    setupMiddlewares: (middlewares) => middlewares,
    static: {
      directory: './public',
    },
  },
  prodServer: {
    port: 3000,
    setupMiddlewares: (middlewares) => middlewares,
    static: {
      directory: './dist',
    },
  },
  moduleFederation: null,
}

const customConfigFilePath = './builder.config.js'

const setConfig = (inlineConfig = {}) => {
  const customConfig = requireIfExist(customConfigFilePath)
  config = merge(config, customConfig, inlineConfig)
  return config
}

const getConfig = () => config

setConfig()

module.exports = {
  getConfig,
  setConfig,
}
