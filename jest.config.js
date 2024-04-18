module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  rootDir: '.',
  testMatch: ['**/__tests__/**/*.spec.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
