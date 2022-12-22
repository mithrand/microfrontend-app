module.exports = {
  moduleFederation: {
    name: 'composer',
    remotes: {
      '@microfronted-app/application-a':
        'applicationA@https://localhost:3001/remoteEntry.js',
      '@microfronted-app/application-b':
        'applicationB@https://localhost:3002/remoteEntry.js',
      '@microfronted-app/ui-kit': 'uiKit@https://localhost:3003/remoteEntry.js',
    },
    shared: {
      pubsubjs: { singleton: true },
      'react-dom': { singleton: true },
      'react-router-dom': { singleton: true },
      react: { singleton: true },
    },
  },
}
