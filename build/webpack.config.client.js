const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin.js')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractPlugin = require('extract-text-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.config.base')
const VueClientPlugin = require('vue-server-renderer/client-plugin')

const isDev = process.env.NODE_ENV === 'development'

const defaultPlugins = [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
        'process.env':{
            NODE_ENV: isDev ? '"development"' : '"production"'
        }
    }),
    new HTMLPlugin({
        template:path.join(__dirname, 'template.html')
    }),
    new VueClientPlugin()
]

const devServer = {
    port: 8000,  
    host:'0.0.0.0',
    overlay:{
        errors:true,
    },
    headers:{'Access-Control-Allow-Origin':'*'},
    hot:true,
    proxy: {
      '/api': 'http://127.0.0.1:3333',
      '/use': 'http://127.0.0.1:3333'
    },
    historyApiFallback:{
        index:'/public/index.html'
    }
}

let config

if(isDev){
    config = merge(baseConfig,{
        devtool: '#cheap-module-eval-source-map',
        module:{
            rules: [
                {
                    test: /\.styl/,
                    use:[
                        'vue-style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        'stylus-loader'
                    ]
                }                
            ]
        },
        devServer,
        plugins:defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin(),
        ])
    })
}else{
    config = merge(baseConfig,{
        entry:{
            app:path.join(__dirname, '../client/client-entry.js'), 
        },
        output:{
            filename:'[name].[chunkhash:8].js',
            publicPath: '/public/'
        },
        module:{
            rules:[{
                test: /\.styl/,
                use:ExtractPlugin.extract({
                    fallback:'vue-style-loader',
                    use:[
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        'stylus-loader']
                })
            }]
        },
        plugins:defaultPlugins.concat([
            new ExtractPlugin('style.[chunkhash:8].css'), 
        ]),
        optimization:{
            splitChunks:{
                chunks:"all"
            },
            runtimeChunk: true   
        }
    })  
}

module.exports = config