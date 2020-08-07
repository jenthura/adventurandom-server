BEGIN;

INSERT INTO char
    (class_name, has_spells, hitpoints)
VALUES
    ('Barbarian' , false, 20),
    ('Bard', true, 15),
    ('Cleric', true, 10),
    ('Druid', true, 15),
    ('Fighter' , false, 58),
    ('Monk', false, 19),
    ('Paladin', true, 20),
    ('Ranger', false, 10),
    ('Rogue', false, 10),
    ('Sorcerer' , true, 20),
    ('Warlock', true, 20),
    ('Wizard', true, 10);

 
INSERT INTO attack
    (damage_type, damage_die, is_spell, attack_name)
VALUES
    ('slashing', 12, false, 'Greataxe'),
    ('bludgeoning', 8, false, 'Warhammer'),
    ('fire', 10, true, 'Fire Bolt');

INSERT INTO char_attack
    (char_id, att_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (1, 2),
    (2, 3),
    (3, 1);

INSERT INTO monster
    (monster_name, hitpoints, damage_die)
VALUES
    ('Goblin', 12, 6),
    ('Chain Devil', 35, 12),
    ('Bugbear', 30, 12),
    ('Bandit', 20, 10),
    ('Vampire', 50, 20),
    ('Vampire thrall', 30, 12),
    ('Flumph', 15, 8),
    ('Skeleton archer', 10, 8),
    ('Boar', 10, 6),
    ('Xorn', 26, 12),
    ('Wyvern', 55, 20),
    ('Griffon', 50, 20),
    ('Efreeti', 50, 20),
    ('Troll', 40, 12),
    ('Elf scout', 15, 6),
    ('Dwarf warrior', 25, 8),
    ('Drow assassin', 25, 10),
    ('Manticore', 50, 12),
    ('Gelatinous cube', 99, 20),
    ('Bear', 40, 12);

INSERT INTO location_flavor
    (location_flavor_string)
VALUES
    ('of the Twisted Root'),
    ('of the Mad King'),
    ('from Hell'),
    ('of Broken Promises'),
    ('of Dreams'),
    ('of Mist'),
    ('of Moonlight'),
    ('of Ages'),
    ('of Eternity'),
    ('of Magic'),
    ('of Mana'),
    ('of Secrets'),
    ('of Lost Souls'),
    ('of Insanity'),
    ('of Hatred'),
    ('of Chaos'),
    ('of Catastrophe'),
    ('of Cats'),
    ('of Darkness'),
    ('of Death'),
    ('of Devils'),
    ('of Disease'),
    ('of Uncomfort'),
    ('of Ruin'),
    ('of Screams'),
    ('of Power'),
    ('of Criminals'),
    ('of Winter'),
    ('of Woe'),
    ('of Worms'),
    ('of Worry'),
    ('of Spite'),
    ('of the Fathers'),
    ('of the Grandfathers'),
    ('of the Sons'),
    ('of the Three Brothers'),
    ('of the Three Sisters'),
    ('of Seven Paths'),
    ('of Valor'),
    ('of Crime'),
    ('of Sorrow'),
    ('of War'),
    ('of No Escape'),
    ('Full of Bones'),
    ('near Zadash'),
    ('near Rohan'),
    ('near Winterdeep'),
    ('near Whiterun'),
    ('near Dawnstar'),
    ('near Falkreath'),
    ('near Bajor'),
    ('near Tellar Prime'),
    ('of Cracked Pearls'),
    ('that is not a Castle'),
    ('that is not a Graveyard'),
    ('that is not a Dungeon'),
    ('that is not a Forest');

COMMIT;