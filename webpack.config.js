const path = require('path')
module.exports = {
    mode: 'production', // 生产模式
    entry: { // 入口
        DiamondUI: './lib/index.tsx'
    },
    output: { // 输出
        path: path.resolve(__dirname, 'dist/lib'), 
        library: 'DiamondUI',
        libraryTarget: 'umd' // 格式
    },
    module: { 
        rules: [
            {
                test: /\.tsx?$/, //  如果是tsx 使用loader翻译成js
                loader: 'awesome-typescript-loader'
            }
        ]
    }
}