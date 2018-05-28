module.exports = {
  // директория с тестами
  roots: [
    '<rootDir>/__tests__'
  ],
  // тесты на typescrypt переводит в js
  transform: {
    '.*\.(tsx?)$': 'ts-jest'
  },
  // регулярка шаблона названия файлов тестов для поиска в рутовой директории
  testRegex: '(./__tests__/.*|(\\.|/)(test|spec))\\.(ts?|tsx?)$',
  //массив расширений файлов используемых в модулях, т.е. расширения файлов которые будет искать Jest
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  // мапинг для модулей ресурсов и т.д
  moduleNameMapper: {
    '\.(css|jpg|png)$': '<rootDir>/empty-module.js',
    "^.+\\.(sass|scss)$": "identity-obj-proxy"
  },
  //флаг при котором при каждом запуске тестов будет собираться информация о покрытии в папку coverage
  collectCoverage: true,
  //флаг при котором если какой-то тест не прошел выполнение тестов не прерывается
  bail: false,
  //флаг при котором каждый запущеный тест отображается в консоли списком
  verbose: true,
  // массив шаблонов для которых должна собираться информация о покрытии тестами
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/index.tsx',
  ]
}