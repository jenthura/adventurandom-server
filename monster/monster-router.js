const express = require('express');
const MonsterService = require('./monster-service');
const monsterRouter = express.Router();
//return an array of all monster objects
monsterRouter.route('/').get((req, res, next) => {
  MonsterService.getAllMonster(req.app.get('db'))
    .then((monster) => {
      res.json(monster);
    })
    .catch(next);
});
//return one monster object by id
monsterRouter.route('/:id').get((req, res, next) => {
  MonsterService.getById(req.app.get('db'), req.params.id)
    .then((monster) => {
      res.json(monster);
    })
    .catch(next);
});

module.exports = monsterRouter;
