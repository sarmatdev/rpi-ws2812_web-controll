const ws281x = require('rpi-ws281x-native');

function rainbow() {
  const NUM_LEDS = 8;
  const pixelData = new Uint32Array(NUM_LEDS);

  ws281x.init(NUM_LEDS);

  process.on('SIGINT', function() {
    ws281x.reset();
  });

  var offset = 0;
  setInterval(function() {
    for (var i = 0; i < NUM_LEDS; i++) {
      pixelData[i] = colorwheel((offset + i) % 256);
    }
    offset = (offset + 1) % 256;
    ws281x.render(pixelData);
  }, 10);
}

function colorwheel(pos) {
  pos = 255 - pos;
  if (pos < 85) {
    return rgb2Int(255 - pos * 3, 0, pos * 3);
  } else if (pos < 170) {
    pos -= 85;
    return rgb2Int(0, pos * 3, 255 - pos * 3);
  } else {
    pos -= 170;
    return rgb2Int(pos * 3, 255 - pos * 3, 0);
  }
}

function rgb2Int(r, g, b) {
  return ((r & 0xff) << 16) + ((g & 0xff) << 8) + (b & 0xff);
}

module.exports = rainbow;
