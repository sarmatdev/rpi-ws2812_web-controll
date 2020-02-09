// const ws281x = require('rpi-ws281x-native')
const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();

// Init middleware
app.use(logger);

// Getts all members
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/members', (req, res) => {
  res.json(members);
});

app.get('/api/members/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  console.log(found);

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({msg: 'Member not found💁🏻‍♂️'});
  }
});

app.listen(8000, () => console.log('Server Started!'));
