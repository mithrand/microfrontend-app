module.exports = {
  prodServer: {
    port: 3003,
  },
  moduleFederation: {
    name: 'uiKit',
    filename: 'remoteEntry.js',
    exposes: {
      '.': './src',
    },
    shared: {
      pubsubjs: { singleton: true },
      'react-dom': { singleton: true },
      'react-router-dom': { singleton: true },
      react: { singleton: true },
    },
  },
}
