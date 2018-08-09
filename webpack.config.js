const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');

// настройки для плагинов html & css
const htmlConfig = {
    title: 'Devkit App (dev)',
    favicon: './public/favicon.ico',
    template: './public/index.html',
};

const webpackConfig = {
    // тип окружения
    mode: 'development',
    // точка входа
    entry: './index.tsx',
    // настройки для получаемого js.bundle файла
    output: {
        filename: 'static/js/[hash]-[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    resolve: {
        // позволяет при импортах опускать расширения файлов, указанные в массиве
        extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
        // позволяет создавать псевдонимы для нужных библиотек()
        alias: {
            react: path.resolve(path.join(__dirname, './node_modules/react')),
            'babel-core': path.resolve(
                path.join(__dirname, './node_modules/@babel/core'),
            ),
            // объявление ресурсного модуля(так же надо объявить его в tsconfig)
            "@resources": path.join(__dirname, './resources/'),
            "@resources": path.join(__dirname, './resources')

        }
    },
    // вкл мапы для браузеров
    devtool: "source-map",
    // загрузчики необходимых ресурсов
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [
                'awesome-typescript-loader',
                // необходимо для react-hot-loader и сборки финально бандла в es5 
                // включен в dev mode, не долже попадаеть в продакшн сборку
                {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            '@babel/plugin-syntax-typescript',
                            '@babel/plugin-syntax-decorators',
                            '@babel/plugin-syntax-jsx',
                            'react-hot-loader/babel',
                        ]
                    }
                }
            ]
        }, {
            test: /\.s(a|c)ss$/,
            use: [
                'style-loader',
                'css-loader',
                'stylus-loader'
            ]
        }, {
            test: /\.(svg|png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'static/images'
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
        }, {
            // генерирует source-map-ы для результирующих js/css файлов
            test: /\.js$/,
            use: ["source-map-loader"],
            enforce: "pre"
        }]
    },
    // настройки dev сервера
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        index: 'index.html',
        compress: true,
        host: "0.0.0.0",
        port: 3000,
        // TODO для роутинга (надо почитать)
        historyApiFallback: true,
        // publicPath: '/'
    },
    plugins: [
        // отвечает за генерацию index.html в /dist
        new HtmlWebpackPlugin(htmlConfig),
        // добавляет манифет о всех ресурсах, используемых в сборке
        new ManifestPlugin(),
        // нужен для react-hot-loader 
        new webpack.NamedModulesPlugin(),
        // добаляет глобальные переменные, необходим для определения типа окружения(production|development)
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ]
};

module.exports = (env, options) => {
    console.log(`Application run in ${env.NODE_ENV.toUpperCase()} mode`);

    return webpackConfig;
}