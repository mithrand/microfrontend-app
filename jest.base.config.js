module.exports = {
  testMatch: ['**/?(*.)(test).(js|jsx|ts|tsx)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/__snapshots__/',
    'coverage',
    'test/cypress',
  ],
  coveragePathIgnorePatterns: [
    '__stories__',
    'index.ts',
    'stories.ts',
    'stories.tsx',
    'reportWebVitals.ts',
  ],
  setupFilesAfterEnv: ['../../setupTests.ts'], // pointing the global setup set
  coverageDirectory: '<rootDir>/coverage',
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
  },
}
