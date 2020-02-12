// const ws281x = require('rpi-ws281x-native');
const express = require('express');
const path = require('path');

// Effects
const plain = require('./effects/plain');
const rainbow = require('./effects/rainbow');
const iterate = require('./effects/iterate');
const sandbox = require('./effects/sandbox')

const app = express();

app.use(express.static(__dirname + '/public'));

// sandbox();

rainbow();

// iterate();

app.listen(8000, () => console.log('Server Started!'));
