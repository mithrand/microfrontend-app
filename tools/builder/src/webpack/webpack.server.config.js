const { getConfig } = require('../libs/config')
const { resolveInContext } = require('../libs/utils')

const getServerConfig = () => {
  const {
    devServer: { port, setupMiddlewares, static },
  } = getConfig()

  return {
    server: 'https',
    https: true,
    hot: true,
    static: {
      directory: resolveInContext(static.directory),
    },
    compress: true,
    port,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    open: true,
    onListening: (devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }
      const { serverPort } = devServer.server.address()
      // eslint-disable-next-line no-console
      console.log('Listening on port:', serverPort)
    },
    setupMiddlewares,
  }
}

module.exports = {
  getServerConfig,
}
