const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebPackMD5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node-modules',
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimise: true}
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebPackMD5Hash(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: './index.html'
        })
    ]
}
