require('dotenv').config()

const express = require('express')
const app = express()
var server = require('http').Server(app);
var io = require('socket.io')(server);
const cors = require('cors')

const PORT = 3000

const route = require('./routes/index')


io.on('connection', (socket) => {
    socket.on('slideIndex', (index) => {
        socket.broadcast.emit('slideIndex', index)
    })
    socket.on('disconnect', () => {
        console.log('Socket has disconnected')
    })
})

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors())
    .use((req, res, next) => {
        req.io = io
        next()
    })
    .use(route)

server.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`)
})