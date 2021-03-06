const knex = require('knex');
const app = require('../src/app');
const { cleanTables, makeFixtures, seedTables } = require('./test-helpers');

describe('Monster endpoint', function () {
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

  beforeEach('clean tables', () => cleanTables(db));

  beforeEach('seed tables', () =>
    seedTables(db, char, attack, char_attack, monster, location_flavor)
  );

  //destroy connection
  after('destroy connection', () => db.destroy());

  it('should resolve all the locations', () => {
    return supertest(app).get('/location').expect(200, location_flavor);
  });
});
