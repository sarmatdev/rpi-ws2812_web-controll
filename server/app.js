const express = require('express');
const socketio = require('socket.io');
require('events').EventEmitter.defaultMaxListeners = 3;
// Effects
const plain = require('./effects/plain');
const rainbow = require('./effects/rainbow');
const iterate = require('./effects/iterate');
const sandbox = require('./effects/sandbox');

const app = express();

const expressServer = app.listen(8000, () => console.log('Server Started!'));
const io = socketio(expressServer);

let effect = null;
io.on('connection', socket => {
  socket.on('effect', data => {
    effect = data;
  });
});