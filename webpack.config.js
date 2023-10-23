const  path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "none",
    entry: path.resolve(__dirname,'src/index.js'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Eltac",
            filename: "index.html",
            template: "src/index.html"
        })
    ]
}