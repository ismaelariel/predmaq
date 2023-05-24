const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env;

module.exports = {
    entry: './src/index.js',
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'inline-source-map',
    bail: true,
    devServer: {
        contentBase: 'build',
        compress: true,
        port: 3000,
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-flow',
                        ],
                        plugins: [
                            'babel-plugin-styled-components',
                            '@babel/plugin-proposal-class-properties',
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
        }),
    ],
};
