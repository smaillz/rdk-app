const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        mode: env.NODE_ENV,
        entry: './index.tsx',
        output: {
            filename: 'static/js/[hash]-[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
            alias: {
                react: path.resolve(path.join(__dirname, './node_modules/react')),
                'babel-core': path.resolve(
                    path.join(__dirname, './node_modules/@babel/core'),
                ),
            },
        },
        devtool: "source-map",
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: [
                    'awesome-typescript-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                '@babel/plugin-syntax-typescript',
                                '@babel/plugin-syntax-decorators',
                                '@babel/plugin-syntax-jsx',
                                'react-hot-loader/babel',
                            ],
                        },
                    }
                ]
            }, {
                test: /\.scss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            minify: true
                        }
                    },
                    'sass-loader'
                ]
            }, {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }]
        },
        plugins: [
            new HtmlWebpackPlugin(htmlConfig),
            new MiniCssExtractPlugin(cssConfig),
            new webpack.NamedModulesPlugin()
        ]
    }
}