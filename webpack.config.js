const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: path.resolve(__dirname, './src/js', 'app.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        historyApiFallback: true
    },
};