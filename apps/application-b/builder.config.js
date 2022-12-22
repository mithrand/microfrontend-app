module.exports = {
  prodServer: {
    port: 3002,
  },
  moduleFederation: {
    name: 'applicationB',
    filename: 'remoteEntry.js',
    remotes: {
      '@microfrontend-app/ui-kit':
        'uiKit@https://localhost:3003/remoteEntry.js',
    },
    exposes: {
      '.': './src',
    },
    shared: {
      pubsubjs: { singleton: true },
      'react-dom': { singleton: true },
      'react-router-dom': { singleton: true },
      react: { singleton: true },
    },
  },
}
