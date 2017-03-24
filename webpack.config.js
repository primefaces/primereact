var webpack = require("webpack");
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/');
var APP_DIR = path.resolve(__dirname, 'src/');
module.exports = {
    entry: APP_DIR + "/index.js",
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/, loader: 'url?limit=100000&name=[name].[ext]' }]
    },
    externals: {
        "jquery": "jQuery"
    },
    devServer: {
        historyApiFallback: {
            index: '/public/index.html'
        }
    }
};