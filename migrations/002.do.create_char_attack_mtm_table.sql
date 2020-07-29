DROP TABLE IF EXISTS char_attack;

CREATE TABLE char_attack (
 char_id integer NOT NULL UNIQUE,
 att_id  integer NOT NULL UNIQUE
);