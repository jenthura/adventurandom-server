const express = require('express');
const LocationService = require('./location-service');
const locationRouter = express.Router();
//return an array of all location objects
locationRouter.route('/').get((req, res, next) => {
  LocationService.getAllLocation(req.app.get('db'))
    .then((location) => {
      res.json(location);
    })
    .catch(next);
});

module.exports = locationRouter;
