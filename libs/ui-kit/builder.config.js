const deps = require('./package.json').peerDependencies

module.exports = {
  prodServer: {
    port: 3003,
  },
  moduleFederation: {
    name: 'uiKit',
    filename: 'uiKit.remoteEntry.js',
    exposes: {
      '.': './src',
    },
    shared: {
      'react-dom': {
        singleton: true,
        requiredVersion: deps['react-dom'],
        eager: true,
      },
      'react-router-dom': {
        singleton: true,
        requiredVersion: deps['react-router-dom'],
        eager: true,
      },
      react: {
        singleton: true,
        requiredVersion: deps.react,
        eager: true,
      },
    },
  },
}
