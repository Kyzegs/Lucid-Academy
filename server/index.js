const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, { cors: { origin: '*' } });

io.on('connection', (socket) => {
    console.log('User connected');
});

http.listen(4000, () => {
    console.log('Listening on port 4000');
});