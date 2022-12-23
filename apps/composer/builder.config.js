const deps = require('./package.json').peerDependencies

module.exports = {
  moduleFederation: {
    name: 'composer',
    remotes: {
      '@microfrontend-app/application-a':
        'applicationA@http://localhost:3001/applicationA.remoteEntry.js',
      '@microfrontend-app/application-b':
        'applicationB@http://localhost:3002/applicationB.remoteEntry.js',
      '@microfrontend-app/ui-kit':
        'uiKit@http://localhost:3003/uiKit.remoteEntry.js',
      '@microfrontend-app/header':
        'header@http://localhost:3004/header.remoteEntry.js',
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
