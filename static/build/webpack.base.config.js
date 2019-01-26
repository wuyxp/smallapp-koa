const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const sourcePath = path.join(__dirname, './static/src');
const outputPath = path.join(__dirname, './../output/dist/');

module.exports = {

  entry: {
    'login': './static/src/pages/login.js',
    'work': './static/src/pages/work.js',
    'index': './static/src/pages/index.js',
    'error': './static/src/pages/error.js',
    'vendor': ['react', 'react-dom', 'whatwg-fetch'],
  },
  output: {
    path: outputPath,
    publicPath: '/static/output/dist/',
    chunkFilename: "static/js[name].chunk.js",
    filename: 'js/[name].js',
  },
  module: {

    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'stage-0', 'react'],
              plugins: [
                "transform-runtime",
                ["import", {libraryName: "antd", style: "css"}] // `style: true` 会加载 less 文件
              ]
              // cacheDirectory: true
            },

          }
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: 'css-loader'
        })
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: 'css-loader?modules'
        })
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 1024 
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sourcePath,
      'node_modules'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/src/view/login.html',
      filename: './login.html',
      hash: true,
      chunks: ['vendor', 'login']
    }),
    new HtmlWebpackPlugin({
      template: './static/src/view/work.html',
      filename: './work.html',
      hash: true,
      chunks: ['vendor', 'work']
    }),
    new HtmlWebpackPlugin({
      template: './static/src/view/index.html',
      filename: './index.html',
      hash: true,
      chunks: ['vendor', 'index']
    }),
    new HtmlWebpackPlugin({
      template: './static/src/view/error.html',
      filename: './error.html',
      hash: true,
      chunks: ['vendor', 'error']
    }),
    new ExtractTextPlugin('css/[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity,
      filename: 'js/[name].js'
    }),
    //在 plugin 中添加
    new CompressionWebpackPlugin({ //gzip 压缩
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(js|css)$'    //压缩 js 与 css
      ),
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      chunks: ['static/js/common.js'],
    }),
  ]
};