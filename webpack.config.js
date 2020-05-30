const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry : './client/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {
                test: /\.((c|sa|sc)ss)$/i,
                use: [
                    // MiniCssExtractPlugin.loader
                     'style-loader'
                    ,'css-loader'
                    ,'sass-loader' 
                ]
            }
        ]
    },
    mode: process.env.NODE_ENV,
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'client/index.html'
        }),
        new MiniCssExtractPlugin()
    ]
    ,
    devServer: {
        contentBase:'./dist/',
        publicPath: '/dist/',
        //port: 8080 // default
        // if I get a get request to a URL that ends in /dist/
        proxy: {
            '/api': 'http://localhost:3000'
          },
        hot: true,
        } 
}
