const express = require('express');
const CharService = require('./char-service');
// const { requireAuth } = require('../middleware/jwt-auth');

const charRouter = express.Router();

charRouter.route('/').get((req, res, next) => {
  CharService.getAllChar(req.app.get('db'))
    .then((char) => {
      res.json(char);
    })
    .catch(next);
});

charRouter.route('/:id').get((req, res, next) => {
  CharService.getById(req.app.get('db'), req.params.id)
    .then((char) => {
      res.json(char);
    })
    .catch(next);
});

charRouter.route('/:id/attacks').get((req, res, next) => {
  CharService.getAttacks(req.app.get('db'), req.params.id)
    .then((char) => {
      res.json(char);
    })
    .catch(next);
});

module.exports = charRouter;
