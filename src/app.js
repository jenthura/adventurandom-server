require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const charRouter = require('../char/char-router');
const monsterRouter = require('../monster/monster-router');
const locationRouter = require('../location/location-router');

const app = express();

app.use(morgan('combined'));

// app.use(
//   morgan(NODE_ENV === 'production' ? 'tiny' : 'dev', {
//     skip: () => NODE_ENV === 'test',
//   })
// );

app.use(cors());
app.use(helmet());

app.use('/char', charRouter);
app.use('/monster', monsterRouter);
app.use('/location', locationRouter);
app.get('/', (req, res) => {
  res.send('Hello, world!')
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: 'freaking Server error' };
  } else {
    console.error(error);
    response = { error: error.message, object: error };
  }
  res.status(500).json(response);
});

module.exports = app;
