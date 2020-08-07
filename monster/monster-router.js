const express = require('express');
const MonsterService = require('./monster-service');
// const { requireAuth } = require('../middleware/jwt-auth');

const monsterRouter = express.Router();

monsterRouter.route('/').get((req, res, next) => {
  console.log('Monster router')
  MonsterService.getAllMonster(req.app.get('db'))
    .then((monster) => {
      console.log('inside then block')
      res.json(monster);
    })
    .catch(next);
});

monsterRouter.route('/:id').get((req, res, next) => {
  MonsterService.getById(req.app.get('db'), req.params.id)
    .then((monster) => {
      res.json(monster);
    })
    .catch(next);
});

module.exports = monsterRouter;
