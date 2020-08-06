const express = require('express');
const LocationService = require('./location-service');
// const { requireAuth } = require('../middleware/jwt-auth');

const locationRouter = express.Router();

locationRouter.route('/').get((req, res, next) => {
  LocationService.getAllLocation(req.app.get('db'))
    .then((location) => {
      res.json(location);
    })
    .catch(next);
});

module.exports = locationRouter;
