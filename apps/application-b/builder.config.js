const sharedDependencies = require('../../webpack.shared')

module.exports = {
  prodServer: {
    port: 3002,
  },
  moduleFederation: {
    name: 'applicationB',
    filename: 'applicationB.remoteEntry.js',
    remotes: {},
    exposes: {
      '.': './src',
    },
    shared: sharedDependencies,
  },
}
