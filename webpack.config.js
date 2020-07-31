require('dotenv').config();
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'vue-style-loader', 'css-loader' ],
      },
      {
        test: /\.scss$/,
        use: [ 'vue-style-loader', 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.sass$/,
        use: [ 'vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax' ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/src/stylesheet/main.scss',
            },
          },
          'css-loader', 'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Events App',
      template: './index.html',
      inject: true,
      chunksSortMode: 'dependency'
    }),
    new MiniCssExtractPlugin({
      filename: 'app.css',
      chunkFilename: 'app.min.css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        EVENTS_APP_API_BASE_URL: JSON.stringify(process.env.EVENTS_APP_API_BASE_URL),
        EVENTS_APP_API_VERSION: JSON.stringify(process.env.EVENTS_APP_API_VERSION),
        FL_PUBLIC_KEY: JSON.stringify(process.env.FL_PUBLIC_KEY),
      },
      'process.env.LOGGER_LEVEL': JSON.stringify('info')
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    overlay: true,
    port: 7000,
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true,
          sourceMap: true,
          comments: false,
          beautify: false,
        },
      })
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        EVENTS_APP_API_BASE_URL: JSON.stringify(process.env.EVENTS_APP_API_BASE_URL),
        EVENTS_APP_API_VERSION: JSON.stringify(process.env.EVENTS_APP_API_VERSION),
        FL_PUBLIC_KEY: JSON.stringify(process.env.FL_PUBLIC_KEY)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
