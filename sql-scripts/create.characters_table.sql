-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** "characters"
DROP TABLE IF EXISTS "characters"
CREATE TABLE "characters"
(
 "id" integer NOT NULL,
 "class_name" text NOT NULL,
 "has_spells" boolean NOT NULL,
 "hitpoints" integer NOT NULL,
 "attacks" integer NOT NULL,
 CONSTRAINT "PK_class" PRIMARY KEY ( "id" )
);







