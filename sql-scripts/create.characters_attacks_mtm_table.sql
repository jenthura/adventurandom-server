-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** "characters_attacks"
DROP TABLE IF EXISTS characters_attacks
CREATE TABLE characters_attacks
(
 char_id integer NOT NULL,
 att_id  integer NOT NULL,
 CONSTRAINT FK_55 FOREIGN KEY ( char_id ) REFERENCES characters ( characters.id ),
 CONSTRAINT FK_71 FOREIGN KEY ( att_id ) REFERENCES attacks ( id )
);

CREATE INDEX fkIdx_55 ON characters_attacks
(
 char_id
);

CREATE INDEX fkIdx_71 ON characters_attacks
(
 att_id
);







