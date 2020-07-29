const CharService = require('../char/char-service');
const knex = require('knex');

describe('Character service object', function () {
  let db;

  let testChar = [
    {
      class_name: 'Wizard',
      hitpoints: 10,
      has_spells: true,
      attack: 5,
    },
    {
      class_name: 'Barbarian',
      hitpoints: 30,
      has_spells: false,
      attack: 2,
    },
  ];

  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });
  });

  describe('getAllChar()', () => {});
  it('should resolve all the characters', () => {
    ////
  });
});
