/// <reference path="node_modules/webpack-dev-server/types/lib/Server.d.ts"/>
import path from 'path'
import { Configuration, HotModuleReplacementPlugin, ProvidePlugin,  } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import Dotenv from 'dotenv-webpack'

const config: Configuration = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/index.tsx',
    hot: 'webpack/hot/dev-server.js',
    client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'js/[name].[contenthash].js',
    assetModuleFilename: '[contenthash][ext][query]'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/statics/[contenthash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new ProvidePlugin({
      React: 'react'
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new HotModuleReplacementPlugin(),
    new Dotenv({
      safe: true
    })
  ],
  optimization: {
    runtimeChunk: 'single'
  },
  devServer: {
    port: 3000,
    compress: true,
    open: true
  }
}

export default config
