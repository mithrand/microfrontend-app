const sharedDependencies = require('../../webpack.shared')

module.exports = {
  prodServer: {
    port: 3004,
  },
  moduleFederation: {
    name: 'header',
    filename: 'header.remoteEntry.js',
    exposes: {
      '.': './src',
    },
    shared: sharedDependencies,
  },
}
