module.exports = {
  roots: [
    '<rootDir>/__tests__'
  ],
  transform: {
    '.*\.(tsx?)$': 'ts-jest'
  },
  testRegex: '(./__tests__/.*|(\\.|/)(test|spec))\\.(ts?|tsx?)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  moduleNameMapper: {
    '\.(css|jpg|png)$': '<rootDir>/empty-module.js',
    "^.+\\.(sass|scss)$": "identity-obj-proxy"
  },
  collectCoverage: true,
  bail: false,
  verbose: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/index.tsx',
  ]
}