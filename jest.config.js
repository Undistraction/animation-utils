module.exports = {
  bail: true,
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`src/**/*.js`],
  coveragePathIgnorePatterns: [`src/index.js`],
  coverageReporters: [`lcov`, `html`],
  setupFiles: [],
  modulePathIgnorePatterns: [`testHelpers/`],
  unmockedModulePathPatterns: [`jasmine-expect`],
  setupTestFrameworkScriptFile: `<rootDir>/src/__tests__/testHelpers/matchers/customMatchers.js`,
}
