require("dotenv").config()
const app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const PORT = process.env.PORT || 3000

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on("nextSlide", function (slide) {
        socket.broadcast.emit("changeSlide", slide)
    })
});

http.listen(PORT, function () {
    console.log(`listening on *:${PORT}`);
});


