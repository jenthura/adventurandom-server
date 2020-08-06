BEGIN;

INSERT INTO char
    (class_name, has_spells, hitpoints)
VALUES
    ('Barbarian' , false, 20),
    ('Monk', false, 16),
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
    ('Vampire', 35, 8),
    ('Bear', 40, 12);

INSERT INTO location_flavor
    (location_flavor_string)
VALUES
    ('of the Twisted Root'),
    ('of the Mad King'),
    ('from Hell'),
    ('of Broken Promises'),
    ('of Dreams'),
    ('Undying'),
    ('Full of Bones'),
    ('near Zadash'),
    ('of Cracked Pearls'),
    ('that is not a Castle'),
    ('that is not a Graveyard'),
    ('that is not a Dungeon'),
    ('that is not a Forest');

COMMIT;