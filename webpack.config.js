const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    
    module: {
        rules: [
            { test: /\.css$/, use:[ 'style-loader', 'css-loader'] },
            {test: /\.(js)$/, use: 'babel-loader'}
        ]
    },
    
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    //sets node_env to production and minifies code and strips out warnings
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
}