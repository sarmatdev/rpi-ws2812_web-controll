const ws281x = require('rpi-ws281x-native');

function iterate(col, brightness) {
  const NUM_LEDS = 8;
  const pixelData = new Uint32Array(NUM_LEDS);
  let color = `0x${col.hex.slice(1, col.length)}`;
  ws281x.init(NUM_LEDS);

  process.on('SIGINT', function() {
    ws281x.reset();
    process.nextTick(function () { process.exit(0); });
  });

  var offset = 0;
  setInterval(function() {
    var i = NUM_LEDS;
    while (i--) {
      pixelData[i] = 0;
    }
    pixelData[offset] = color;

    offset = (offset + 1) % NUM_LEDS;
    ws281x.setBrightness(brightness)
    ws281x.render(pixelData);
  }, 1000);
}

module.exports = iterate;
