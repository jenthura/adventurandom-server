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

COMMIT;