'use strict';

const express    = require( 'express' );

const app            = express();
const path           = require( 'path' );
const morgan         = require( 'morgan' );
const bodyParser     = require( 'body-parser' );
const methodOverride = require( 'method-override' );

const PORT = process.env.PORT || 2305;
const HOST = process.env.HOST || '0.0.0.0';

/////////////// MiddleWares ///////////////

app.use( morgan( 'dev' ) );
app.use( methodOverride() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { "extended": true } ) );
app.use( express.static( __dirname ) );

/////////////// Routes ///////////////

const index = require( path.resolve( 'Server/index/router' ) );

app.use( '/', index );

if ( app.get( 'env' ) === 'development' ) {
    app.use( ( err, req, res, next ) => {
	console.log( err );
	return err ? res.status( err.status || 500 ).end() : next();
    });
}

app.use( function( err, req, res, next) {
  return res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen( PORT, HOST, () => {
    console.log( `App Started at ${ HOST }:${ PORT }` );
});
