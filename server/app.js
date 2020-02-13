const express = require('express');
const socketio = require('socket.io');

// Effects
const plain = require('./effects/plain');
const rainbow = require('./effects/rainbow');
const iterate = require('./effects/iterate');
const sandbox = require('./effects/sandbox');

const app = express();

const expressServer = app.listen(8000, () => console.log('Server Started!'));
const io = socketio(expressServer);

io.on('connection', socket => {
  socket.on('effect', data => {
    switch (data) {
      case 'plain':
        plain();
        break;
      case 'rainbow':
        rainbow();
        break;
      case 'iterate':
        iterate();
        break;
      case 'sandbox':
        sandbox();
        break;
    }
  });
});
