const knex = require('knex');
const app = require('../src/app');
const { cleanTables, makeFixtures, seedTables } = require('./test-helpers');

describe('Char endpoint', function () {
  let db;

  before('create db connection', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set('db', db);
  });

  const {
    char,
    attack,
    char_attack,
    monster,
    location_flavor,
  } = makeFixtures();

  const oneAttack = (({ attack_name, damage_die }) => ({
    attack_name,
    damage_die,
  }))(attack[1]);

  const testAttackArray = [];
  testAttackArray.push(oneAttack);

  beforeEach('clean tables', () => cleanTables(db));

  beforeEach('seed tables', () =>
    seedTables(db, char, attack, char_attack, monster, location_flavor)
  );

  //destroy connection
  after('destroy connection', () => db.destroy());

  it('should resolve all the characters', () => {
    return supertest(app).get('/char').expect(200, char);
  });

  it('should resolve one character', () => {
    return supertest(app).get('/char/2').expect(200, char[1]);
  });

  it('should resolve one attack for a class', () => {
    return supertest(app).get('/char/2/attacks').expect(200, testAttackArray);
  });
});
