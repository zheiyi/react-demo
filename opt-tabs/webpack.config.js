const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['transform-decorators-legacy']
            }
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192'
        }, {
            //     test: /\.css$/,
            //     loaders: [
            //         'style-loader',
            //         'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
            //     ]
            // }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"'
            }),
        }, {
            test: /\.scss$/,
            loaders: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"',
                    'resolve-url-loader',
                    'sass-loader'
                ]
            })
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        }, ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'index.css',
            allChunks: true
        })
    ]
};