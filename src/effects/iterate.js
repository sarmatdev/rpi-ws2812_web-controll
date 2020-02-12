const ws281x = require('rpi-ws281x-native');

function iterate() {
  const NUM_LEDS = 8;
  const pixelData = new Uint32Array(NUM_LEDS);

  ws281x.init(NUM_LEDS);

  process.on('SIGINT', function() {
    ws281x.reset();
  });

  var offset = 0;
  setInterval(function() {
    var i = NUM_LEDS;
    while (i--) {
      pixelData[i] = 0;
    }
    pixelData[offset] = 0xffffff;

    offset = (offset + 1) % NUM_LEDS;
    ws281x.setBrightness(50)
    ws281x.render(pixelData);
  }, 50);
}

module.exports = iterate;
