const ws281x = require('rpi-ws281x-native');

function plain() {
  const NUM_LEDS = 8;
  const pixelData = new Uint32Array(NUM_LEDS);
  const color1 = 0x00ff00;
  const color2 = 0xff0000;

  ws281x.init(NUM_LEDS);

  // ---- trap the SIGINT and reset before exit
  process.on('SIGINT', function() {
    ws281x.reset();
    process.nextTick(function() {
      process.exit(0);
    });
  });

  pixelData[4] = color2;
  pixelData[3] = color1;

  ws281x.render(pixelData);

  // ---- animation-loop
  var t0 = Date.now();
  setInterval(function() {
    var dt = Date.now() - t0;
    // ws281x.setBrightness(Math.floor(Math.cos(dt / 1000) * 128 + 128));
    ws281x.setBrightness(Math.floor(Math.sin(dt / 1000) * 128 + 128));
    // console.log(Math.floor(Math.sin(dt / 1000) * 128 + 128), dt)

    // console.log(t0, dt, Math.floor(Math.sin(dt / 1000) * 128 + 128));
  }, 10);

  console.log('Press <ctrl>+C to exit.');
}

module.exports = plain;
