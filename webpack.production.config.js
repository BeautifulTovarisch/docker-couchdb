const path = require( 'path' );
const merge = require( 'webpack-merge' );
const webpack = require( 'webpack' );

const UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const commonConfig = require( './webpack.config' );

const productionConfig = {
    plugins: [
        new webpack.LoaderOptionsPlugin( {
            "debug": false,
            "minimize": true
        } ),
        new UglifyJSPlugin( {
            "beautify": false,
            "compress": {
                "unused": true,
                "warnings": false,
                "evaluate": true,
                "dead_code": true,
                "sequences": true,
                "join_vars": true,
                "if_return": true,
                "comparisons": true,
                "conditionals": true
            },
            "output": {
                "comments": false
            },
            "comments": false,
            "sourceMap": true
        } ),
        new webpack.DefinePlugin( {
            'process.env.NODE_ENV': JSON.stringify( 'production' )
        } ),
        new webpack.SourceMapDevToolPlugin( {
            "columns": false
        } ) // https://github.com/webpack/webpack/issues/2145#issuecomment-251691937
    ]
};

module.exports = merge( commonConfig, productionConfig );
