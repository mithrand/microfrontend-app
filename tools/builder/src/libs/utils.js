const { resolve } = require('path')

const context = process.cwd()

const resolveInContext = (path) => resolve(context, path)

// eslint-disable-next-line import/no-dynamic-require, global-require
const requireInContext = (path) => require(resolveInContext(path))

module.exports = {
  resolveInContext,
  requireInContext,
}
