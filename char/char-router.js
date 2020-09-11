const express = require('express');
const CharService = require('./char-service');
const charRouter = express.Router();
//return an array of all character objects
charRouter.route('/').get((req, res, next) => {
  CharService.getAllChar(req.app.get('db'))
    .then((char) => {
      res.json(char);
    })
    .catch(next);
});
//return one character object by id
charRouter.route('/:id').get((req, res, next) => {
  CharService.getById(req.app.get('db'), req.params.id)
    .then((char) => {
      res.json(char);
    })
    .catch(next);
});
//returns an array of all attacks assigned to one character matching the parameter id
charRouter.route('/:id/attacks').get((req, res, next) => {
  CharService.getAttacks(req.app.get('db'), req.params.id)
    .then((char) => {
      res.json(char);
    })
    .catch(next);
});

module.exports = charRouter;
