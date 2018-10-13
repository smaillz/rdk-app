const path = require('path');

module.exports = {
    react: path.resolve(path.join(__dirname, '../node_modules/react')),
    'babel-core': path.resolve(
        path.join(__dirname, '../node_modules/@babel/core')
    ),
    // объявление ресурсных модулей(так же надо объявить его в tsconfig)
    // первые 2 можно использовать в путях к ресурсам добавляя ~ (напр: ~@resources)
    "@resources": path.join(__dirname, '../resources/'),
    "@resources": path.join(__dirname, '../resources'),
    "@models": path.join(__dirname, '../src/Models'),
    "@consts": path.join(__dirname, '../src/Constants'),
    "@actions": path.join(__dirname, '../src/Actions/'),
    "@thunk": path.join(__dirname, '../src/Thunk/'),
    "@containers": path.join(__dirname, '../src/Containers/'),
    "@components": path.join(__dirname, '../src/Components/'),
    "@utils": path.join(__dirname, '../src/Utils')
};