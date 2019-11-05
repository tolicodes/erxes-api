module.exports = {
  roots: ['<rootDir>/src/__tests__'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '/__tests__/.*\\.(ts|js)$',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  modulePathIgnorePatterns: ['utils.ts', 'setup.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/data/resolvers/queries/**',
    '!src/data/resolvers/queries/insights.ts',
    '!src/data/resolvers/queries/configs.ts',
    '!src/data/resolvers/queries/robot.ts',
    '!src/data/resolvers/queries/permissions.ts',
    '!src/data/resolvers/queries/boardUtils.ts',
    '!src/data/resolvers/queries/logs.ts',
    '!src/index.ts',
    '!src/db/factories.ts',
    '!src/db/connection.ts',
    '!src/data/schema/**',
    '!src/db/models/definitions/**',
    '!src/data/resolvers/subscriptions/**',
    '!src/data/index.ts',
    '!src/data/utils.ts',
    '!src/workers/utils.ts',
  ],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
    },
  },
};
