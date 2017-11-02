var express = require('express')
var app = express();
var server = require('http').Server(app);

const PORT = process.env.PORT || 3011;

// var server = require( 'http' ).createServer( ).listen( PORT, function () {
//     console.log( "Express server listening on PORT " + PORT );
// } );


// express server
server.listen(PORT, function() {
  console.log('server running on port: ' + PORT);
}); // start the server
app.use(express.static('public'));

app.get('/', function (req, res) {
  // other route
  res.send('server 1 page');
});


var io = require( 'socket.io' ).listen( server );

io.sockets.on( "connection", function ( socket ) {

    console.log( 'Server: Incoming connection.' );

    socket.on( "echo", function ( msg, callback ) {
        console.log('tried sending message from server1');

        io.sockets.emit('bounce', {my: 'data'}); // send to client socket
        // callback( msg );
    } );

} );
