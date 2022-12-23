const sharedDependencies = require('../../webpack.shared')

module.exports = {
  prodServer: {
    port: 3001,
  },
  moduleFederation: {
    name: 'applicationA',
    filename: 'applicationA.remoteEntry.js',
    remotes: {},
    exposes: {
      '.': './src',
    },
    shared: sharedDependencies,
  },
}
