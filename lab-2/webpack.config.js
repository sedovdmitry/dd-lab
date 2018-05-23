const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
    // entry point
    watch: true, // Если true, следит за изменениями и пересобирает проект

    context: path.resolve(__dirname, 'src'),

    entry: {
        app: ['babel-polyfill', './index.js'],
    },

    // output

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].js'
    },

    // tranforms

    module: {

        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ],

    },

    plugins: [
        new CleanWebpackPlugin([
            'dist'
        ], {
            watch: true,
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],

    devServer: {
        port: 3000
    }
}

module.exports = config;