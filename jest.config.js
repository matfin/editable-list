module.exports = {
  globals: {
    window: true
  },
  rootDir: '.',
  coverageDirectory: './coverage',
  setupFiles: ['./jestsetup.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  moduleNameMapper: {
    '^components$': '<rootDir>/src/components',
    '^models$': '<rootDir>/src/models',
    '^utils$': '<rootDir>/src/utils',
  },
  coveragePathIgnorePatterns: [
    'node_modules',
  ],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jest-environment-jsdom-sixteen',
};
