const ws281x = require('rpi-ws281x-native');

function plain(col = '#ff00ff', bri = 30) {
  const NUM_LEDS = 8;
  const pixelData = new Uint32Array(NUM_LEDS);
  let color = `0x${col.slice(1, col.length)}`;

  ws281x.init(NUM_LEDS);

  process.on('SIGINT', function() {
    ws281x.reset();
    process.nextTick(function() {
      process.exit(0);
    });
  });

  for (var i = 0; i < NUM_LEDS; i++) {
    pixelData[i] = color;
  }
  ws281x.render(pixelData);

  ws281x.setBrightness(bri * 1);
}

module.exports = plain;
