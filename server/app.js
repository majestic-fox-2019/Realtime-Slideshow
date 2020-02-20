'use strict';

if (process.env.NODE_ENV == 'development') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const server = require('http').createServer(app);
const io = require('socket.io');

const indexRouter = require('./routes');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// socket.io
app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use('/api', indexRouter);

server.listen(port, () => {
  console.log(`Sunday Slides API is running on PORT ${port}!`);
});
