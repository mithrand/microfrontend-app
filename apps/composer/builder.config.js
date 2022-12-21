module.exports = {
  moduleFederation: {
    name: 'composer',
    remotes: {
      applicationA: 'applicationA@https://localhost:3001/remoteEntry.js',
      applicationB: 'applicationB@https://localhost:3002/remoteEntry.js',
    },
    shared: {
      react: { singleton: true },
      'react-dom': { singleton: true },
      'react-router-dom': { singleton: true },
      pubsubjs: { singleton: true },
    },
  },
}
