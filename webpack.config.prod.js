const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// настройки для минимизации html
const htmlMinimizeOptions = {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
};

// настройки для плагинов HtmlWebpackPlugin & MiniCssExtractPlugin
const htmlConfig = {
    title: 'Devkit App',
    favicon: './public/favicon.ico',
    template: './public/index-prod.html',
    minify: htmlMinimizeOptions
};

const cssConfig = {
    filename: './static/css/[hash].css'
};

// базовые настройки конфига webpack
const webpackConfig = {
    // тип окружения
    mode: 'production',
    // точка входа
    entry: {
        app: path.resolve(__dirname, 'index.tsx')
    },
    // настройки для результирующего js бандла и все что к нему прилагается(css,image,...)
    output: {
        filename: 'static/js/[hash]-[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    resolve: {
        // позволяет при импортах опускать расширения файлов, указанные в массиве
        extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
        // позволяет создавать псевдонимы для нужных библиотек и модулей
        // а так же настраиваются сокращения при импортах к указанным директориям
        alias: {
            react: path.resolve(path.join(__dirname, './node_modules/react')),
            'babel-core': path.resolve(
                path.join(__dirname, './node_modules/@babel/core')
            ),
            // объявление ресурсных модулей(так же надо объявить его в tsconfig)
            // первые 2 можно использовать в путях к ресурсам добавляя ~ (напр: ~@resources)
            "@resources": path.join(__dirname, './resources/'),
            "@resources": path.join(__dirname, './resources'),
            "@models": path.join(__dirname, './src/Models'),
            "@consts": path.join(__dirname, './src/Constants'),
            "@actions": path.join(__dirname, './src/Actions/'),
            "@thunk": path.join(__dirname, './src/Thunk/'),
            "@containers": path.join(__dirname, './src/Containers/'),
            "@components": path.join(__dirname, './src/Components/'),
            "@utils": path.join(__dirname, './src/Utils')
        }
    },
    // вкл source-map-ы для отображение исходников в браузере
    // в продакшн сборке надо отключать(пока вкл для отладки)
    devtool: 'source-map',
    // загрузчики для различных типов файлов
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'awesome-typescript-loader'
        }, {
            test: /\.scss$/,
            use: [
                // для prod - все файлы со стилями собираются в 1-н файл, подключается к index.html через link
                MiniCssExtractPlugin.loader,
                'css-loader',
                'stylus-loader'
            ]
        }, {
            test: /\.(svg|png|jpg|gif|jpeg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'static/images',
                }
            }]
        }, {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'static/fonts'
                }
            }]
        }]
    },
    //настройки минимизации для js и css
    optimization: {
        minimizer: [
            // UglifyJsPlugin - минимизация js результирующего файла (вписан сюда потому что если оставить только для css, js файл не минифицируется)
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            // OptimizeCSSAssetsPlugin - минимизация css результирующего файла
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: false,
                        annotation: true
                    }
                }
            })
        ]
    },
    plugins: [
        // отвечает за генерацию результирующего index.html в /dist
        new HtmlWebpackPlugin(htmlConfig),
        // отвечает за сборку всех scss|sass|css файлов в один файл со стилями
        new MiniCssExtractPlugin(cssConfig),
        // добавляет манифет о всех ресурсах, используемых в сборке
        new ManifestPlugin(),
        // добаляет глобальные переменные, необходим для определения типа окружения(production|development)
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};

module.exports = (env) => {
    console.log(`Application run in ${env.NODE_ENV.toUpperCase()} mode`);

    return webpackConfig;
}