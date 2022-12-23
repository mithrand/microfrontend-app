const { dependencies } = require('./package.json')

module.exports = {
  'react-dom': {
    singleton: true,
    requiredVersion: dependencies['react-dom'],
  },
  'react-router-dom': {
    singleton: true,
    requiredVersion: dependencies['react-router-dom'],
  },
  react: {
    singleton: true,
    requiredVersion: dependencies.react,
  },
  '@microfrontend-app/ui-kit': {
    singleton: true,
    requiredVersion: dependencies['@microfrontend-app/ui-kit'],
  },
  'pubsub-js': {
    singleton: true,
    requiredVersion: dependencies['pubsub-js'],
  },
}
