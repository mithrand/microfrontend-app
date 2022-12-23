const { existsSync } = require('fs')
const { resolve } = require('path')

const context = process.cwd()

const resolveInContext = (path) => resolve(context, path)

// eslint-disable-next-line import/no-dynamic-require, global-require
const requireInContext = (path) => require(resolveInContext(path))

const requireIfExist = (path, fallback = null) => {
  if (!existsSync(resolveInContext(path))) {
    return fallback
  }

  return requireInContext(path)
}

const sanitizeFileName = (fileName) =>
  fileName.replaceAll('@', '').replaceAll('/', '__').replaceAll('-', '_')

module.exports = {
  resolveInContext,
  requireInContext,
  requireIfExist,
  sanitizeFileName,
}
