const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({},base,{
    mode: 'production', // 生产模式
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ReactUI',
            template: 'index.html'
        })
    ],
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'react-dom',
        },
    }
}) 