const ws281x = require('rpi-ws281x-native');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/rainbow', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/rainbow.html'));
  var NUM_LEDS = 8,
    pixelData = new Uint32Array(NUM_LEDS);

  ws281x.init(NUM_LEDS);

  // ---- trap the SIGINT and reset before exit
  process.on('SIGINT', function() {
    ws281x.reset();
    process.nextTick(function() {
      process.exit(0);
    });
  });

  // ---- animation-loop
  var offset = 0;
  setInterval(function() {
    var i = NUM_LEDS;
    while (i--) {
      pixelData[i] = 0;
    }
    pixelData[offset] = 0xe600ff;

    offset = (offset + 1) % NUM_LEDS;
    ws281x.setBrightness(20);
    ws281x.render(pixelData);
  }, 100);

  console.log('Press <ctrl>+C to exit.');
});

app.listen(8000, () => console.log('Server Started!'));
