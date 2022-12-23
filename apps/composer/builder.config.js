const sharedDependencies = require('../../webpack.shared')

module.exports = {
  moduleFederation: {
    name: 'composer',
    remotes: {
      '@microfrontend-app/application-a':
        'applicationA@http://localhost:3001/applicationA.remoteEntry.js',
      '@microfrontend-app/application-b':
        'applicationB@http://localhost:3002/applicationB.remoteEntry.js',
      '@microfrontend-app/header':
        'header@http://localhost:3004/header.remoteEntry.js',
    },
    shared: sharedDependencies,
  },
}
