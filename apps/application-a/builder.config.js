module.exports = {
  prodServer: {
    port: 3001,
  },
  moduleFederation: {
    name: 'applicationA',
    filename: 'remoteEntry.js',
    remotes: {
      '@microfronted-app/ui-kit': 'uiKit@https://localhost:3003/remoteEntry.js',
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
