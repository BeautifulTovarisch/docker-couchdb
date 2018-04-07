const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
    entry: [
        'babel-polyfill',
        path.resolve( __dirname, 'client/scripts/index.jsx' )
    ],
    output: {
        path: path.resolve( __dirname, './' ),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].bundle.map'
    },
    module: {
        rules: [
          {
              test: /\.css$/,
              include: /node_modules/,
              use: [
                {
                    loader: 'style-loader?sourceMap'
                },
                {
                    loader: 'css-loader?importLoaders=1'
                }
              ]
          },
          {
              test: /\.css$/,
              include: path.resolve( __dirname, 'vendor' ),
              use: [
                  {
                      loader: 'style-loader?source-map'
                  },
                  {
                      loader: 'css-loader?-url&importLoaders=1'
                  }
              ]
          },
          {
              test: /\.css$/,
              include: path.resolve( __dirname, 'styles' ),
              loaders: [
                {
                    loader: 'style-loader?sourceMap'
                },
                {
                    loader: 'css-loader?-url&importLoaders=1'
                }
              ]
          },
          {
              test: /\.css$/,
              exclude: [
                path.resolve( __dirname, 'styles' ),
                path.resolve( __dirname, 'node_modules' )
              ],
              loaders: [
                {
                    loader: 'style-loader?sourceMap'
                },
                {
                    loader: 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                }
              ]
          },
          {
              test: /\.woff[2]?(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url-loader?limit=10000&minetype=application/font-woff"
          },
          {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url-loader?limit=10000&minetype=application/octet-stream"
          },
          {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              loader: "file-loader?context=./app/static"
          },
          {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url-loader?limit=10000&minetype=image/svg+xml"
          },
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader'
              }
          }
        ]
    },
    resolve: {
        alias: {
            // 'Redux': path.resolve( __dirname, './Client/scripts/Redux' ),
            // 'Config': path.resolve( __dirname, './Client/config.js' ),
            // 'Styles': path.resolve( __dirname, './Client/styles' ),
            // 'Visuals': path.resolve( __dirname, './Client/scripts/Visuals' ),
            // 'Utilities': path.resolve( __dirname, './Client/scripts/Utilities' ),
            // 'Components': path.resolve( __dirname, './Client/scripts/Components' )
        }
    },
    plugins: [
      new webpack.ProvidePlugin( {
          React: "react"
      } ),
      new webpack.NamedModulesPlugin()
    ]
};
