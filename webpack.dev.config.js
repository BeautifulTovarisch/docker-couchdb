const path = require( 'path' );
const merge = require( 'webpack-merge' );
const webpack = require( 'webpack' );
const commonConfig = require( './webpack.config' );

const WEBPACK_PORT = process.env.WEBPACK_PORT || 3000;

const devConfig = {
    devtool: 'cheap-eval-source-map',
    devServer: {
	port: WEBPACK_PORT,
	host: "localhost",
	historyApiFallback: true,
	noInfo: false,
	stats: "minimal"
    }
};

module.exports = merge( commonConfig, devConfig );
