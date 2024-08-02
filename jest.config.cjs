module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.tsx?$': 'babel-jest',
    },
    setupFiles: ['./jest.setup.js'],
  };
  