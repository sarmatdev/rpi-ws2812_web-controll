const ws281x = require('rpi-ws281x-native');

function plain(col) {
  const NUM_LEDS = 8;
  const pixelData = new Uint32Array(NUM_LEDS);
  let color = `0x${col.slice(1, col.length)}`
  console.log(color)
  ws281x.init(NUM_LEDS);

  process.on('SIGINT', function() {
    ws281x.reset();
  });

  for (var i = 0; i < NUM_LEDS; i++) {
    pixelData[i] = color;
  }
  ws281x.render(pixelData);

  ws281x.setBrightness(10);

  console.log('Plain');
}

module.exports = plain;
