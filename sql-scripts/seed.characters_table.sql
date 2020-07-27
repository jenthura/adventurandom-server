BEGIN;

INSERT INTO characters_table
    (class_name, has_spells, hitpoints, attacks)
VALUES
    (Barbarian , true, 20, 1),
    (Monk, false, 16, 2),
    (Wizard, true, 10, 3)
COMMIT;