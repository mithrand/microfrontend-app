const merge = require('lodash.merge')
const baseConfig = require('../../jest.base.config')

module.exports = merge(baseConfig, {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)(test).(ts|tsx)'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
})
