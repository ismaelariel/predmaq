const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = (env, argv) => {
    const modeType = env.production;

    return {
        mode: modeType ? 'production' : 'development',
        devtool: 'inline-source-map',
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
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
                        !modeType ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader',
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
        optimization: modeType ? {
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
            // {
            //     bufferutil: "bufferutil",
            //     "utf-8-validate": "utf-8-validate",
            // }
        ],
        // experiments: {
        //   outputModule: true,
        // },
        // externalsType: 'module',
        // externalsPresets: {
        //     node: true,
        // },
        // extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
        // alias: {
        //     '~': path.resolve(__dirname, 'src/'),
        //     "utf-8-validate": "utf-8-validate",
        // },
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            port: 3000,
            compress: true,
            historyApiFallback: true, 
            // OR
            // client: {
            //     webSocketURL: 'auto://myapp.test:80/ws'
            // },
        }
    };
};
