const express = require('express');
const http = require('http');
const {join} = require('node:path')
const {Server} = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = new Server(server)

app.get('/', (req:any, res:any) => {
    res.sendFile(join(__dirname,'index.html'))
});

io.on('connection', socket => {

    socket.on('chat message', (msg: string)=> {
        io.emit('chat message', msg)
    })
})

server.listen(3000, () => {
    console.log('Server running at port 3000');
});
