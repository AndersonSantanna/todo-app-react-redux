const webpack = require('webpack')
const ETP = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output:{
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer:{
        port:8082,
        contentBase: './public'
    },
    resolve:{
        extensions:['','.js', '.jsx'],
        alias:{
            module: __dirname + '/node_modules'
        }
    },
    plugins:[
        new ETP('app.css')
    ],
    module:{
        loaders:[{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        },{
            test: /\.css$/,
            loader: ETP.extract('style-loader', 'css-loader')
        },{
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}