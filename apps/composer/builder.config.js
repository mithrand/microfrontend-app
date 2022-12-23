const deps = require('./package.json').peerDependencies

module.exports = {
  moduleFederation: {
    name: 'composer',
    remotes: {
      '@microfrontend-app/application-a':
        'applicationA@https://localhost:3001/applicationA.remoteEntry.js',
      '@microfrontend-app/application-b':
        'applicationB@https://localhost:3002/applicationB.remoteEntry.js',
      '@microfrontend-app/ui-kit':
        'uiKit@https://localhost:3003/uiKit.remoteEntry.js',
      '@microfrontend-app/header':
        'header@https://localhost:3004/header.remoteEntry.js',
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
