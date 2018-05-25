const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');

const cssMinimizeOptions = {
    normalizeWhitespace: true,
    uniqueSelectors: true,
    colormin: true,
    discardComments: true,
    discardDuplicates: true,
    discardEmpty: true,
    discardOverridden: true,
    minifyParams: true,
    minifyFontValues: true
};

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

const htmlConfig = {
    title: 'Devkit App',
    favicon: './public/favicon.ico',
    template: './public/index.html',
    minify: htmlMinimizeOptions
};

const cssConfig = {
    filename: './static/css/[hash].css'
};

module.exports = (env, options) => {
    const devMode = env.NODE_ENV !== 'production'

    return {
        // тип окружения
        mode: env.NODE_ENV,
        // точка входа
        entry: './index.tsx',
        // настройки для получаемого js.bundle файла
        output: {
            filename: 'static/js/[hash]-[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
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
            },
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
                test: /\.scss$/,
                use: [
                    // в зависимости от типа окружения выбирается поведение лоадеров
                    // при dev - достаточно style-loader
                    // для prod - все файлы со стилями собираются в 1-н, подключается к index.html через link
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        // создается source-map для результирующего css файла
                        // а так же производится минификация этогоже файла 
                        options: {
                            minimize: cssMinimizeOptions,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
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
            port: 3000
        },
        plugins: [
            // отвечает за генерацию index.html в /dist
            new HtmlWebpackPlugin(htmlConfig),
            // отвечает за сборку всех scss|css файлов в один файл со стилями
            new MiniCssExtractPlugin(cssConfig),
            // добавляет манифет о всех ресурсах, используемых в сборке
            new ManifestPlugin(),
            // нужен для react-hot-loader 
            new webpack.NamedModulesPlugin(),
            // добаляет глобальные переменные, необходим для определения типа окружения(production|development)
            new webpack.DefinePlugin({
                'process.env':{
                    'NODE_ENV': JSON.stringify(env.NODE_ENV)
                }
            })
        ]
    }
}