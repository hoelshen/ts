const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
module.exports = {
    entry: {
        'app': './src/index.tsx'
    },
    output: {
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [{
            test: /\.tsx?$/i,
            use: [{
                loader: 'ts-loader',
                // loader: "awesome-typescript-loader",
                options: {
                    // transpileOnly: false
                }
            }],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        }),
        // new ForkTsCheckerWebpackPlugin()
    ],
    optimization:{
        splitChunks:{
            chunks: 'all'
        }
    }
}