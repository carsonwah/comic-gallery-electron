import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,ts,jsx,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom', // Enable browser-like environment e.g. having "document" variable
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.ts",
    "\\.(css|scss|sass|less)$": "identity-obj-proxy"
  },
};

export default config;
