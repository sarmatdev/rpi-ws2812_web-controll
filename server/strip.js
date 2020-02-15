const ws281x = require('rpi-ws281x-native');

const NUM_LEDS = 8;
const pixelData = new Uint32Array(NUM_LEDS);
ws281x.init(NUM_LEDS);

class Strip {
  constructor(NUM_LEDS, pixelData) {
    this.NUM_LEDS = NUM_LEDS;
    this.pixelData = pixelData;
  }

  stop() {
    ws281x.reset();
  }

  run() {
    ws281x.render(pixelData);
  }
}
