const express = require('express')
const app = express()
const http = require('http').createServer(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on("plus",(data) => {
    io.emit("loadp",data)
  })
  socket.on("current",(data) => {
    io.emit("loadc",data)
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});