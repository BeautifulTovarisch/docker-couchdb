'use strict';

const path   = require( 'path' );
const Router = require( 'express' ).Router();

Router.get( '/', ( req, res ) => {
    return res.sendFile( 'index.html', { "root": './' } );
});


module.exports = Router;
