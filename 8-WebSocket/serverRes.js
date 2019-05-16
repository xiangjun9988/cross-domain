var app = require('express')();
var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function (client) {
    client.emit('data', 'Hello WebSocket from 3026.');
});

server.listen(3026, function () {
    console.log('Responser is listening on port 3026');
});    //监听3001端口