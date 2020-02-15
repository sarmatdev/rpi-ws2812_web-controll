const ws281x = require('rpi-ws281x-native');

function sandbox() {
  // const NUM_LEDS = 8;
  // const pixelData = new Uint32Array(NUM_LEDS);
  // const color1 = 0x00ff00;
  // const color2 = 0xff0000;

  // ws281x.init(NUM_LEDS);

  // // ws281x.reset();
  // // process.on('exit', (code) => {
  // //   console.log(`About to exit with code: ${code}`);
  // // });

  // // setTimeout(() => {
  // //   process.exit(0)
  // // }, 4000);

  // // ---- trap the SIGINT and reset before exit
  // // process.on('SIGINT', function() {
  // //   process.exit(0);
  // //   // ws281x.reset();
  // //   // process.nextTick(function() {
  // //   // });
  // // });

  // pixelData[4] = color2;
  // pixelData[3] = color1;

  // ws281x.render(pixelData);

  // // ---- animation-loop
  // var t0 = Date.now();
  // setInterval(function() {
  //   var dt = Date.now() - t0;
  //   ws281x.setBrightness(Math.floor(Math.sin(dt / 1000) * 128 + 128));
  // }, 10);
}

module.exports = sandbox;
