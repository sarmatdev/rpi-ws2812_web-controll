const ws281x = require('rpi-ws281x-native');

function plain() {
  const NUM_LEDS = 8;
  const pixelData = new Uint32Array(NUM_LEDS);
  const color1 = 0x34d5eb;
  const color2 = 0xeb3434;

  ws281x.init(NUM_LEDS);

  process.on('SIGINT', function() {
    ws281x.reset();
  });

  for (var i = 0; i < NUM_LEDS; i++) {
    pixelData[i] = color2;
  }
  ws281x.render(pixelData);

  ws281x.setBrightness(30);

  console.log('Fader');
}

module.exports = plain;
