var express = require('express');
var http = require('http');
var join = require('node:path').join;
var Server = require('socket.io').Server;
var app = express();
var server = http.createServer(app);
var io = new Server(server);
app.get('/', function (req, res) {
    res.sendFile(join(__dirname, 'index.html'));
});
io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});
server.listen(3000, function () {
    console.log('Server running at port 3000');
});
