var express = require('express')
var app = express();
var server = require('http').Server(app);

const PORT = process.env.PORT || 3011;

var server = require( 'http' ).createServer( ).listen( PORT, function () {
    console.log( "Express server listening on PORT " + PORT );
} );

var io = require( 'socket.io' ).listen( server ).set( "log level", 0 );

io.sockets.on( "connection", function ( socket ) {
    console.log( 'Server: Incoming connection.' );
    socket.on( "echo", function ( msg, callback ) {
        callback( msg );
    } );
} );
