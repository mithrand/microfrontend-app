module.exports = {
  prodServer: {
    port: 3001,
  },
  moduleFederation: {
    name: 'applicationA',
    filename: 'remoteEntry.js',
    exposes: {
      '.': './src',
    },
    shared: {
      react: { singleton: true },
      'react-dom': { singleton: true },
      'react-router-dom': { singleton: true },
      pubsubjs: { singleton: true },
    },
  },
}
