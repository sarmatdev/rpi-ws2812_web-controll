const ws281x = require('rpi-ws281x-native');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/rainbow', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/rainbow.html'));
  const NUM_LEDS = 8
    const pixelData = new Uint32Array(NUM_LEDS);

  ws281x.init(NUM_LEDS);

  // ---- trap the SIGINT and reset before exit
  process.on('SIGINT', function() {
    ws281x.reset();
    process.nextTick(function() {
      process.exit(0);
    });
  });

  for (var i = 0; i < NUM_LEDS; i++) {
    pixelData[i] = 0x0051ff;
  }
  ws281x.render(pixelData);
  console.log(pixelData)

  // ---- animation-loop
  ws281x.setBrightness(10);

  console.log('Press <ctrl>+C to exit.');
});

app.listen(8000, () => console.log('Server Started!'));
