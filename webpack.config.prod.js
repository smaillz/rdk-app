const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');

// настройки для минимизации css и html
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

// настройки для плагинов html & css
const htmlConfig = {
    title: 'Devkit App',
    favicon: './public/favicon.ico',
    template: './public/index-prod.html',
    minify: htmlMinimizeOptions
};

const cssConfig = {
    filename: './static/css/[hash].css'
};


const webpackConfig = {
    // тип окружения
    mode: 'production',
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
    // выкл source-map-ы для браузеров
    devtool: false,
    // загрузчики необходимых ресурсов
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'awesome-typescript-loader'
        }, {
            test: /\.scss$/,
            use: [
                // для prod - все файлы со стилями собираются в 1-н файл, подключается к index.html через link
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    // производится минификация этогоже файла 
                    // options: {
                    //     minimize: cssMinimizeOptions,
                    // }
                    options: { minimize: true }
                },
                'sass-loader'
            ]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'static/img',
                }
            }]
        }]
    },
    plugins: [
        // отвечает за генерацию index.html в /dist
        new HtmlWebpackPlugin(htmlConfig),
        // отвечает за сборку всех scss|css файлов в один файл со стилями
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

module.exports = (env, options) => {
    console.log(`Application run in ${env.NODE_ENV} mode`);

    return webpackConfig;
}