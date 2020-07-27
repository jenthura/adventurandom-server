BEGIN;

INSERT INTO attacks
    (damage_type, damage_die, is_spell, attack_name)
VALUES
    ('slashing', 12, false, 'Greataxe'),
    ('bludgeoning', 8, false, 'Warhammer'),
    ('fire', 10, true, 'Fire Bolt');

COMMIT;