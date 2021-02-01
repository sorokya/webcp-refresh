PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE `accounts`
(
        `username`   VARCHAR(16) NOT NULL,
        `password`   CHAR(64)    NOT NULL,
        `fullname`   VARCHAR(64) NOT NULL,
        `location`   VARCHAR(64) NOT NULL,
        `email`      VARCHAR(64) NOT NULL,
        `computer`   VARCHAR(64) NOT NULL,
        `hdid`       INTEGER     NOT NULL,
        `regip`      VARCHAR(15) NOT NULL,
        `lastip`     VARCHAR(15)          DEFAULT NULL,
        `created`    INTEGER     NOT NULL,
        `lastused`   INTEGER              DEFAULT NULL,

        PRIMARY KEY (`username`)
);
INSERT INTO accounts VALUES('admin','7152f1b94bf094fad2ea4c62646851c056922a5ebd08e253a30a96bd1a53efc2','admin','earth','admin@eoserv-refresh.local','Admin-PC',0,'127.0.0.1','127.0.0.1',1611785380,1612038378);
INSERT INTO accounts VALUES('player','7152f1b94bf094fad2ea4c62646851c056922a5ebd08e253a30a96bd1a53efc2','player','earth','player@eoserv-refresh.local','Player-PC',0,'127.0.0.1','127.0.0.1',1611785380,1612038378);
CREATE TABLE `characters`
(
        `name`        VARCHAR(16) NOT NULL,
        `account`     VARCHAR(16)          DEFAULT NULL,
        `title`       VARCHAR(32)          DEFAULT NULL,
        `home`        VARCHAR(32)          DEFAULT NULL,
        `fiance`      VARCHAR(16)          DEFAULT NULL,
        `partner`     VARCHAR(16)          DEFAULT NULL,
        `admin`       INTEGER     NOT NULL DEFAULT 0,
        `class`       INTEGER     NOT NULL DEFAULT 0,
        `gender`      INTEGER     NOT NULL DEFAULT 0,
        `race`        INTEGER     NOT NULL DEFAULT 0,
        `hairstyle`   INTEGER     NOT NULL DEFAULT 0,
        `haircolor`   INTEGER     NOT NULL DEFAULT 0,
        `map`         INTEGER     NOT NULL DEFAULT 192,
        `x`           INTEGER     NOT NULL DEFAULT 7,
        `y`           INTEGER     NOT NULL DEFAULT 6,
        `direction`   INTEGER     NOT NULL DEFAULT 2,
        `level`       INTEGER     NOT NULL DEFAULT 0,
        `exp`         INTEGER     NOT NULL DEFAULT 0,
        `hp`          INTEGER     NOT NULL DEFAULT 10,
        `tp`          INTEGER     NOT NULL DEFAULT 10,
        `str`         INTEGER     NOT NULL DEFAULT 0,
        `int`         INTEGER     NOT NULL DEFAULT 0,
        `wis`         INTEGER     NOT NULL DEFAULT 0,
        `agi`         INTEGER     NOT NULL DEFAULT 0,
        `con`         INTEGER     NOT NULL DEFAULT 0,
        `cha`         INTEGER     NOT NULL DEFAULT 0,
        `statpoints`  INTEGER     NOT NULL DEFAULT 0,
        `skillpoints` INTEGER     NOT NULL DEFAULT 0,
        `karma`       INTEGER     NOT NULL DEFAULT 1000,
        `sitting`     INTEGER     NOT NULL DEFAULT 0,
        `hidden`      INTEGER     NOT NULL DEFAULT 0,
        `nointeract`  INTEGER     NOT NULL DEFAULT 0,
        `bankmax`     INTEGER     NOT NULL DEFAULT 0,
        `goldbank`    INTEGER     NOT NULL DEFAULT 0,
        `usage`       INTEGER     NOT NULL DEFAULT 0,
        `inventory`   TEXT,
        `bank`        TEXT,
        `paperdoll`   TEXT,
        `spells`      TEXT,
        `guild`       CHAR(3)              DEFAULT NULL,
        `guild_rank`  INTEGER              DEFAULT NULL,
        `guild_rank_string` VARCHAR(16)    DEFAULT NULL,
        `quest`       TEXT,
        `vars`        TEXT,

        PRIMARY KEY (`name`)
);
INSERT INTO characters VALUES('admin','admin',NULL,NULL,NULL,NULL,4,0,0,0,0,0,192,7,6,2,0,0,10,10,0,0,0,0,0,0,0,0,1000,0,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO characters VALUES('test','admin',NULL,NULL,NULL,NULL,0,0,0,0,0,0,192,7,6,2,0,0,10,10,0,0,0,0,0,0,0,0,1000,0,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO characters VALUES('guide','admin',NULL,NULL,NULL,NULL,1,0,0,0,0,0,192,7,6,2,0,0,10,10,0,0,0,0,0,0,0,0,1000,0,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO characters VALUES('player','player',NULL,NULL,NULL,NULL,0,0,0,0,0,0,192,7,6,2,0,0,10,10,0,0,0,0,0,0,0,0,1000,0,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
CREATE TABLE `guilds`
(
        `tag`         CHAR(3)     NOT NULL,
        `name`        VARCHAR(32) NOT NULL,
        `description` TEXT,
        `created`     INTEGER     NOT NULL,
        `ranks`       TEXT,
        `bank`        INTEGER     NOT NULL DEFAULT 0,

        PRIMARY KEY (`tag`),
        UNIQUE      (`name`)
);
CREATE TABLE `bans`
(
        `ip`       INTEGER              DEFAULT NULL,
        `hdid`     INTEGER              DEFAULT NULL,
        `username` VARCHAR(16)          DEFAULT NULL,
        `setter`   VARCHAR(16)          DEFAULT NULL,
        `expires`  INTEGER     NOT NULL DEFAULT 0,

        PRIMARY KEY (`ip`, `hdid`, `username`, `expires`)
);
CREATE TABLE `reports`
(
        `reporter` VARCHAR(16) NOT NULL,
        `reported` VARCHAR(16) NOT NULL,
        `reason`   TEXT,
        `time`     INTEGER     NOT NULL,
        `chat_log` TEXT        NOT NULL,

        PRIMARY KEY (`reporter`, `reported`, `time`)
);
CREATE INDEX `character_account_index` ON `characters` (`account`);
CREATE INDEX `character_guild_index` ON `characters` (`guild`);
CREATE INDEX `ban_ip_index` ON `bans` (`ip`);
CREATE INDEX `ban_hdid_index` ON `bans` (`hdid`);
CREATE INDEX `ban_username_index` ON `bans` (`username`);
COMMIT;