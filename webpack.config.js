const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: 'bundle.js',
        publicPath: './public',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss$/,
                loader: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            hash: true
        }),
        new MiniCSSExtractPlugin({
            filename: 'main.css',
        })
    ],
    devServer: {
        hot: true,
        historyApiFallback: true,
    },
};