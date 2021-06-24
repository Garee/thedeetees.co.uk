// @ts-check
// https://jestjs.io/docs/configuration

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
  setupFilesAfterEnv: ["<rootDir>/__tests__/config/setup.js"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.next/",
    "/__tests__/config/",
    "/__tests__/mocks/",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.scss$": "<rootDir>/__tests__/config/transform-scss.js",
  },
  transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(scss)$"],
  moduleNameMapper: {
    "^.+\\.module\\.(scss)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
};

module.exports = config;
