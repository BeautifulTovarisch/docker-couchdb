const webpack             = require('webpack');
const commonConfig        = require('./webpack.config');
const merge               = require( 'webpack-merge' );
const HtmlWebpackPlugin   = require('html-webpack-plugin');

const testConfig = {
    entry: [
      'mocha-loader!./src/scripts/index.spec.js',
    ],
    output: {
      filename: 'test.build.js',
      path: "/tests/",
      publicPath: "http://localhost:9090/tests"
    },
    module: {
      rules: [
        {
          test: /\.spec\.js$/,
          include: /src/,
          use: [
            { loader: 'mocha-loader' },
            { loader: 'babel-loader' }
          ]
        }
      ]
    },
    devServer: {
      host: "localhost",
      port: 9090
    },
    externals: {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    },
    plugins: [
      new HtmlWebpackPlugin( {
        title: 'MPA Project Dashboard',
        filename: 'index.html',
        inject: 'body',
        template: './src/index.spec.html'
      } ),
      // Need to run npm script again to see changes
      new webpack.ProvidePlugin({
        chai: "chai",
        sinon: "sinon"
      })
    ]
};

module.exports = merge( commonConfig, testConfig );
