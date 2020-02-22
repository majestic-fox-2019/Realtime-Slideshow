const expess = require("express");
const app = expess();
const port = process.env.PORT || 3000;
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(expess.static("public"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    let i = 0;
    socket.on("changePage", (data) => {
        io.emit("getPage", data)
    })
});

server.listen(port, function () {
    console.log(`Listening on port ${port}`);
});