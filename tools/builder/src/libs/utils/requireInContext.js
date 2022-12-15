const { resolve } = require('path')

const context = process.cwd()


// eslint-disable-next-line import/no-dynamic-require, global-require
module.exports = (path) => require(resolve(context, path))