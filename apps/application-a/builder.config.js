const deps = require('./package.json').peerDependencies

module.exports = {
  prodServer: {
    port: 3001,
  },
  moduleFederation: {
    name: 'applicationA',
    filename: 'applicationA.remoteEntry.js',
    remotes: {
      '@microfrontend-app/ui-kit':
        'uiKit@https://localhost:3003/uiKit.remoteEntry.js',
    },
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
