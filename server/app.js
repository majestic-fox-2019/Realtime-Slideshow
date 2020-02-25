const app       = require('express')();
const server    = require('http').createServer(app);
const io        = require('socket.io')(server);

io.on('connection', client => {
  // Standby cek apakah ada user yang mengirimkan / emit
  client.on('add', data => {
      // kirim ke semua client yang terhubung
      io.emit('add', data + 1); 
  });
  client.on('subtract', data => {
    io.emit('subtract', data - 1);
  })
  client.on('disconnect', () => { 
      console.log("socket client keluar pak eko");
   });
});
server.listen(3000, () => {
    console.log(`server listening on port ${3000}`);
});