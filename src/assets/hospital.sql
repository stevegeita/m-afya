CREATE TABLE IF NOT EXISTS hospital (hospname TEXT, location TEXT);
INSERT or IGNORE INTO hospital VALUES ('Outspan', 'nyeri');
INSERT or IGNORE INTO hospital VALUES ('Pgh', 'nyeri');
INSERT or IGNORE INTO hospital VALUES ('Bliss', 'nyeri');
INSERT or IGNORE INTO hospital VALUES ('Bliss', 'othaya');
INSERT or IGNORE INTO hospital VALUES ('st francis', 'karatina');
INSERT or IGNORE INTO hospital VALUES ('jamii', 'karatina');


CREATE TABLE IF NOT EXISTS pharmacies (phmname TEXT, location TEXT);
INSERT or IGNORE INTO pharmacies VALUES ('Dominion', 'nyeri');
INSERT or IGNORE INTO pharmacies VALUES ('Jospharma', 'nyeri');
INSERT or IGNORE INTO pharmacies VALUES ('Inpha', 'nyeri');
INSERT or IGNORE INTO pharmacies VALUES ('Karima', 'othaya');
INSERT or IGNORE INTO pharmacies VALUES ('Transpharm', 'karatina');
INSERT or IGNORE INTO pharmacies VALUES ('Primepharm', 'karatina');


create TABLE IF NOT EXISTS account (fname TEXT, lname TEXT, age Text, insurance Text, contact TEXT, contact2 TEXT, bloodgroup TEXT, allergies TEXT, durgs TEXT, chronic TEXT);
INSERT or IGNORE INTO account VALUES ('steve', 'geita', '22', 'nhif', '+254717585627', '+25457598300', 'O positive', 'asprin', 'panadol', 'asthma');
