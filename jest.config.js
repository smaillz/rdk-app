module.exports = {
  // директория с тестами и исходниками ()
  roots: [
    '<rootDir>/__tests__',
    '<rootDir>/src'
  ],
  // тесты на typescrypt переводит в js
  transform: {
    '.*\.(tsx?)$': 'ts-jest'
  },
  // регулярка шаблона названия файлов тестов для поиска в рутовой директории
  testRegex: '(./__tests__/.*|(\\.|/)(test|spec))\\.(ts?|tsx?)$',
  // позволяет при импортах опускать расширения файлов, указанные в массиве
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
    '\.(css|jpg|png)$': 'identity-obj-proxy',
    '^.+\\.(sass|scss)$': 'identity-obj-proxy',
    "@resources(.*)$": "<rootDir>/resources/$1",
    "@models(.*)$": "<rootDir>/src/Models/$1",
    "@consts(.*)$": "<rootDir>/src/Constants/$1",
    "@actions(.*)$": "<rootDir>/src/Actions/$1",
    "@thunk(.*)$": "<rootDir>/src/Thunk/$1",
    "@containers(.*)$": "<rootDir>/src/Containers/$1",
    "@components(.*)$": "<rootDir>/src/Components/$1",
    "@utils(.*)$": "<rootDir>/src/Utils/$1",
  },
  // файл с настройкам который отрабатывает перед запуском тестов
  // (добавлен для запуска тестов на react v16)
  setupTestFrameworkScriptFile: '<rootDir>/jest-settings.js',
  //флаг при котором если какой-то тест не прошел выполнение тестов не прерывается
  bail: false,
  //флаг при котором каждый запущеный тест отображается в консоли списком
  verbose: true,
  //флаг при котором при каждом запуске тестов будет собираться информация о покрытии в папку coverage
  collectCoverage: true,
  // массив шаблонов покаторым будет собираться покрытия и исключаемые файлы/директории
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    "!**/node_modules/**",
    "!**/src/index.tsx",
    "!**/src/Models/**",
    "!**/src/Constants/**",
    "!**/src/Api/**"
  ]
}