const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({},base,{
    mode: 'development', // 开发模式
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ReactUI',
            template: 'index.html'
        })
    ],
}) 