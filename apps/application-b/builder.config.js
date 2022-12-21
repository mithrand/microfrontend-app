module.exports = {
  prodServer: {
    port: 3002,
  },
  moduleFederation: {
    name: 'applicationB',
    filename: 'remoteEntry.js',
    exposes: {
      './App': './src/App',
    },
    shared: {
      react: { singleton: true },
      'react-dom': { singleton: true },
      'react-router-dom': { singleton: true },
      pubsubjs: { singleton: true },
    },
  },
}