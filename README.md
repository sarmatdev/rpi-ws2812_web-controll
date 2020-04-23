# Full Stack Vue/Node/Socket.io App for controlling ws281x leds via Raspberry Pi

## Setup
Connect to your Raspberry Pi via ssh. Clone this repo on root directory. Run the `npm install` commad for install project dependencies. After installation, you may have a `rpi-ws281x-native` library error, for solving this error you need go to rpi-ws281x-native folder in node_modules directory `cd node_modules/rpi-ws281x-native`. After that execute `node-gyp rebuild`. If this step does not solve your problem, write to me, I will be happy to help!

Also connect your Pi to the network, this can be done by connecting via cable directly or by configuring the wi-fi. After that, open your ethernet router settings and find your Pi IP address.
