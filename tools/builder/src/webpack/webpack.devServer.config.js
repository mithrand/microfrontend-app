const { getConfig } = require('../libs/config')
const { resolveInContext } = require('../libs/utils')

const getDevServerConfig = () => {
  const {
    devServer: { port, setupMiddlewares, static },
  } = getConfig()

  return {
    server: 'https',
    https: true,
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
    historyApiFallback: true,
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
  getDevServerConfig,
}
