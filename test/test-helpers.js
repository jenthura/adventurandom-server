function makeTestCharArray() {
  return [
    {
      id: 1,
      class_name: 'Wizard',
      hitpoints: 10,
      has_spells: true,
    },
    {
      id: 2,
      class_name: 'Barbarian',
      hitpoints: 30,
      has_spells: false,
    },
  ];
}

function makeTestAttacksArray() {
  return [
    {
      id: 1,
      damage_type: 'slashing',
      damage_die: 12,
      is_spell: false,
      attack_name: 'Greataxe',
    },
    {
      id: 2,
      damage_type: 'piercing',
      damage_die: 8,
      is_spell: false,
      attack_name: 'Crossbow',
    },
    {
      id: 3,
      damage_type: 'piercing',
      damage_die: 12,
      is_spell: false,
      attack_name: 'Throwing stars',
    },
    {
      id: 4,
      damage_type: 'piercing',
      damage_die: 8,
      is_spell: false,
      attack_name: 'Longbow',
    },
    {
      id: 5,
      damage_type: 'force',
      damage_die: 12,
      is_spell: true,
      attack_name: 'Magic Missile',
    },
  ];
}

function makeTestCharAttacksArray() {
  return [
    { char_id: 1, att_id: 1 },
    { char_id: 1, att_id: 2 },
    { char_id: 2, att_id: 2 },
  ];
}

function makeTestMonsterArray() {
  return [
    { id: 1, monster_name: 'Goblin', hitpoints: 12, damage_die: 6 },
    { id: 2, monster_name: 'Chain Devil', hitpoints: 35, damage_die: 12 },
    { id: 3, monster_name: 'Vampire', hitpoints: 50, damage_die: 20 },
    { id: 4, monster_name: 'Bugbear', hitpoints: 30, damage_die: 12 },
    { id: 5, monster_name: 'Bandit', hitpoints: 20, damage_die: 10 },
  ];
}

function makeTestLocationFlavorArray() {
  return [
    { id: 1, location_flavor_string: 'of the Twisted Root' },
    { id: 2, location_flavor_string: 'of the Mad King' },
    { id: 3, location_flavor_string: 'from Hell' },
    { id: 4, location_flavor_string: 'of Broken Promises' },
    { id: 5, location_flavor_string: 'of Dreams' },
  ];
}

function cleanTables(db) {
  return db.raw(
    `TRUNCATE TABLE
    char,
    attack,
    char_attack,
    monster,
    location_flavor
    RESTART IDENTITY CASCADE;
    `
  );
}

function makeFixtures() {
  const char = makeTestCharArray();
  const attack = makeTestAttacksArray();
  const char_attack = makeTestCharAttacksArray();
  const monster = makeTestMonsterArray();
  const location_flavor = makeTestLocationFlavorArray();

  return { char, attack, char_attack, monster, location_flavor };
}

function seedTables(db, char, attack, char_attack, monster, location_flavor) {
  return db.transaction(async (trx) => {
    await trx('char').insert(char);
    await trx('attack').insert(attack);
    await trx('char_attack').insert(
      trx
        .select('char.id', 'attack.id')
        .from('char')
        .innerJoin('attack', 'char.id', 'attack.id')
    );
    await trx('monster').insert(monster);
    await trx('location_flavor').insert(location_flavor);
  });
}

module.exports = {
  cleanTables,
  makeTestCharArray,
  makeTestAttacksArray,
  makeTestCharAttacksArray,
  makeTestMonsterArray,
  makeTestLocationFlavorArray,
  makeFixtures,
  seedTables,
  cleanTables,
};
