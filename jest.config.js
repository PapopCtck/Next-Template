const esModules = ['react-datepicker', 'lodash-es'].join('|');

module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  rootDir: '.',
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules', '__test__/utils'],
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/components$1',
    '^@/stories(.*)$': '<rootDir>/stories$1',
    '^@/pages(.*)$': '<rootDir>/pages$1',
    '^@/hooks(.*)$': '<rootDir>/hooks$1',
    '^@/utils(.*)$': '<rootDir>/utils$1',
    '^@/common(.*)$': '<rootDir>/common$1',
    '^@/themes(.*)$': '<rootDir>/themes$1',
    '^@/stores(.*)$': '<rootDir>/stores$1',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
  transformIgnorePatterns: [`node_modules/(?!${esModules})`],
};
