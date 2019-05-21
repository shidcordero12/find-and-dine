module.exports = {
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverageFrom: [
    'src/components/**/*.{js}',
    'src/controllers/**/*.{js}',
    'src/directives/**/*.{js}',
    'src/services/**/*.{js}',
    'src/utilities/**/*.{js}',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/public/',
    '<rootDir>/node_modules/',
    '<rootDir>/tools/',
    '<rootDir>/server/',
    '<rootDir>/src/assets',
    '<rootDir>/src/data',
    '<rootDir>/src/copy',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/test/mocks/styleMock.js',
    '\\.(gif|ttf|eot|svg|html)$': '<rootDir>/test/mocks/fileMock.js',
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^Services(.*)$': '<rootDir>/src/services$1',
    '^Controllers(.*)$': '<rootDir>/src/controllers$1',
    '^Directives(.*)$': '<rootDir>/src/directives$1',
    '^Mappers(.*)$': '<rootDir>/src/mappers$1',
  },
};
