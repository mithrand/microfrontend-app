const express = require('express')
const compression = require('compression')
const serveIndex = require('serve-index')

const { getConfig } = require('../libs/config')
const { resolveInContext } = require('../libs/utils')

let server = null

const start = () => {
  const {
    prodServer: {
      port,
      static: { directory },
    },
  } = getConfig()
  const app = express()
  app.use(compression())

  const staticDir = resolveInContext(directory)
  app.use(express.static(staticDir), serveIndex(directory, { icons: true }))

  server = app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Serving on http://localhost:${port}/`)
    console.log(`Serving ${staticDir}`)
  })
}

const stop = () => {
  server?.close()
  console.log(`Closing server`)
  process.exit(0)
}

process.on('SIGTERM', stop)
process.on('SIGINT', stop)

const API = {
  start,
  stop,
}

module.exports = API
