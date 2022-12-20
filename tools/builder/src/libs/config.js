const { merge } = require('lodash')
const { existsSync } = require('fs')

const { requireInContext } = require('./utils')
const { resolveInContext } = require('./utils')
const { buildModes } = require('../constants')

let config = {
  device: 'desktop',
  buildMode: buildModes.assets,
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
}

const customConfigFilePath = './builder.config.js'

const setConfig = (inlineConfig = {}) => {
  let customConfig = {}

  if (existsSync(resolveInContext(customConfigFilePath))) {
    customConfig = requireInContext(customConfigFilePath)
  }

  config = merge(config, customConfig, inlineConfig)
  return config
}

const getConfig = () => config

setConfig()

module.exports = {
  getConfig,
  setConfig,
}
