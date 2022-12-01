/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {

  roots: [
    '<rootDir>/src'
  ],

  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ],

  transform: {
    '.+\\.ts$': 'ts-jest'
  },

  collectCoverage: true,

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  testEnvironment: 'node',

  modulePathIgnorePatterns: [
    '<rootDir>/src/interfaces/'
  ]

};
