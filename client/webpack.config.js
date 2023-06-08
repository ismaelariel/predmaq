const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = (env, argv) => {
    const isProduction = env.production;

    return {
        mode: isProduction ? 'production' : 'development',
        devtool: 'inline-source-map',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'main.js',
            clean: true,
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
                            cacheCompression: true,
                            presets: [
                                ['@babel/preset-react']
                            ],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    }
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader',
                    ]
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader'
                        },
                    ]
                },
            ],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css",
                chunkFilename: "[id].[contenthash].css",
                ignoreOrder: false,
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                title: 'Roomeeting Templace',
                filename: 'index.html',
            }),
            new TerserPlugin({
                terserOptions: {
                    compress: argv.mode === 'production'
                }
            }),
        ],
        optimization: isProduction ? {
            chunkIds: 'named',
            nodeEnv: 'production',
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
            minimize: true,
            minimizer: [new MiniCssExtractPlugin(), new TerserPlugin()],
        } : {},
        externals: [
            {
                react: 'react',
                lodash: {
                    commonjs: 'lodash',
                    amd: 'lodash',
                    root: '_',
                },
                subtract: ['./math', 'subtract'],
            },
        ],
        devServer: {
            static: {
                directory: path.join(__dirname, 'build'),
            },
            port: 3000,
            compress: true,
            historyApiFallback: true,
        }
    };
};