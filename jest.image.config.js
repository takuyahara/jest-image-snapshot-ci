const jestConfig = require('./jest.config');

module.exports = Object.assign(jestConfig, {
  testMatch: [
    "<rootDir>/__tests_image__/**/*.{js,jsx,ts,tsx}",
  ],
  preset: 'jest-puppeteer',
  setupFiles: [
    './setupTests.js'
  ]
});