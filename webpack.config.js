const path = require('path')
module.exports = {
    // mode: 'production', // 生产模式
    entry: { // 入口
        DiamondUI: './example.tsx'
    },
    resolve: {
        extensions: ['.ts','.tsx','.js','.jsx']
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
            },{
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            },{
                test: /\.scss$/,
                use: [
                    // [style-loader](/loaders/style-loader)
                    { loader: 'style-loader' },
                    // [css-loader](/loaders/css-loader)
                    {
                      loader: 'css-loader',
                    },
                    // [sass-loader](/loaders/sass-loader)
                    { loader: 'sass-loader' }
                  ]
            }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'ReactUI',
    //         template: 'index.html'
    //     })
    // ],
    // externals: {
    //     react: {
    //         commonjs: 'react',
    //         commonjs2: 'react',
    //         amd: 'react',
    //         root: 'React',
    //     },
    //     'react-dom': {
    //         commonjs: 'react-dom',
    //         commonjs2: 'react-dom',
    //         amd: 'react-dom',
    //         root: 'react-dom',
    //     },
    // }
}