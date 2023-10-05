export default {
  testEnvironmentOptions: {
    customExportConditions: ['node'],
  },
  moduleFileExtensions: [
    'js'
  ],
  testRegex: '\.spec\.js$',
  reporters: ['default'],
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  collectCoverage: false,
  coverageReporters: [],
  moduleDirectories: ['node_modules']
};
