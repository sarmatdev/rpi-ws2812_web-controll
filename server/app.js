const express = require('express');
const socketio = require('socket.io');
const ws281x = require('rpi-ws281x-native');

// Effects
const plain = require('./effects/plain');
const rainbow = require('./effects/rainbow');
const iterate = require('./effects/iterate');
const sandbox = require('./effects/sandbox');

const app = express();

const expressServer = app.listen(8000, () => console.log('Server Started!'));
const io = socketio(expressServer);

let effect = {
  color: '',
  brightness: '',
  speed: ''
};

io.on('connection', socket => {
  socket.on('effect', data => {
    effect.color = data.color.hex;
    effect.brightness = data.brightness;
    effect.speed = data.speed;
  });
});

const NUM_LEDS = 8;
const pixelData = new Uint32Array(NUM_LEDS);

ws281x.init(NUM_LEDS);

// ---- trap the SIGINT and reset before exit
process.on('SIGINT', function() {
  ws281x.reset();
  process.nextTick(function() {
    process.exit(0);
  });
});

// for (var i = 0; i < NUM_LEDS; i++) {
//   pixelData[i] = 0x0ff0f0;
// }

// ws281x.render(pixelData);

// ---- animation-loop
var t0 = Date.now();
setInterval(function() {
  var dt = Date.now() - t0;

  for (var i = 0; i < NUM_LEDS; i++) {
    pixelData[i] = parseInt(`0x${effect.color.slice(1, effect.color.length)}`);
    console.log(parseInt('0x'+effect.color.slice(1, effect.color.length)))
  }
  ws281x.render(pixelData);

  ws281x.setBrightness(effect.brightness * 1);
});
