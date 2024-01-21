DROP DATABASE IF EXISTS msa;
CREATE DATABASE msa;
USE msa;

-- ==================================================
-- CREATE DATABASE msa;
-- ==================================================

CREATE TABLE artist (
   artist_id VARCHAR(36) NOT NULL, -- UUID 36
   name VARCHAR(50) NOT NULL,
   verified BOOLEAN NOT NULL,
   followers INTEGER UNSIGNED NOT NULL,
   monthly_listeners INTEGER UNSIGNED NOT NULL,
   profile_photo VARCHAR(255), -- path
   profile_banner VARCHAR(255), -- path
   about TEXT, -- path

   PRIMARY KEY (artist_id)
);

CREATE TABLE album (
   album_id VARCHAR(36) NOT NULL, -- UUID 36
   title VARCHAR(255) NOT NULL,
   disc_type VARCHAR(10) NOT NULL, -- 'Album', 'EP', 'Single', 'Mixtape'
   cover_art VARCHAR(255) NOT NULL, -- path
   label VARCHAR(255) NOT NULL,
   release_date DATE NOT NULL, -- 'YYYY-MM-DD'
   duration TIME NOT NULL, -- 'HH:MM:SS'

   PRIMARY KEY (album_id)
);

CREATE TABLE track (
   track_id VARCHAR(36) NOT NULL, -- UUID 36
   album_id VARCHAR(36) NOT NULL,
   title VARCHAR(255) NOT NULL,
   disc_number TINYINT UNSIGNED,
   track_number TINYINT UNSIGNED NOT NULL,
   -- writer VARCHAR(255),
   -- producer VARCHAR(255),
   duration TIME NOT NULL, -- 'HH:MM:SS'
   is_explicit BOOLEAN NOT NULL,
   plays INTEGER UNSIGNED NOT NULL,
   lyrics VARCHAR(255), -- path
   source_file VARCHAR(255) NOT NULL, -- path

   PRIMARY KEY (track_id),
   FOREIGN KEY (album_id) REFERENCES album(album_id)
);

CREATE TABLE user (
   user_id VARCHAR(36) NOT NULL, -- UUID 36
   name VARCHAR(50) NOT NULL,
   email VARCHAR(100) UNIQUE NOT NULL,
   password TEXT NOT NULL,
   profile_photo VARCHAR(255), -- path

   PRIMARY KEY (user_id)
);

CREATE TABLE playlist (
   playlist_id VARCHAR(36) NOT NULL, -- UUID 36
   title VARCHAR(255) NOT NULL,
   cover_art VARCHAR(255), -- path
   created_by VARCHAR(36) NOT NULL, -- UUID 36
   is_public BOOLEAN NOT NULL,

   PRIMARY KEY (playlist_id),
   FOREIGN KEY (created_by) REFERENCES user(user_id)
);

-- Playlist tracks
CREATE TABLE playlist_track (
   playlist_track_id INTEGER NOT NULL AUTO_INCREMENT,
   playlist_id VARCHAR(36) NOT NULL, -- UUID 36
   track_id VARCHAR(36) NOT NULL, -- UUID 36
   -- added_at DATE NOT NULL,

   PRIMARY KEY (playlist_track_id),
   FOREIGN KEY (playlist_id) REFERENCES playlist(playlist_id),
   FOREIGN KEY (track_id) REFERENCES track(track_id)
);

-- Ownership
CREATE TABLE album_artist (
   album_artist_id INTEGER NOT NULL AUTO_INCREMENT,
   album_id VARCHAR(36) NOT NULL, -- UUID 36
   artist_id VARCHAR(36) NOT NULL, -- UUID 36

   PRIMARY KEY (album_artist_id),
   FOREIGN KEY (album_id) REFERENCES album(album_id),
   FOREIGN KEY (artist_id) REFERENCES artist(artist_id)
);

-- Contribution
CREATE TABLE track_artist (
   track_artist_id INTEGER NOT NULL AUTO_INCREMENT,
   track_id VARCHAR(36) NOT NULL, -- UUID 36
   artist_id VARCHAR(36) NOT NULL, -- UUID 36

   PRIMARY KEY (track_artist_id),
   FOREIGN KEY (track_id) REFERENCES track(track_id),
   FOREIGN KEY (artist_id) REFERENCES artist(artist_id)
);

-- Liked Track
CREATE TABLE user_track (
   user_track_id INTEGER NOT NULL AUTO_INCREMENT,
   user_id VARCHAR(36) NOT NULL, -- UUID 36
   track_id VARCHAR(36) NOT NULL, -- UUID 36

   PRIMARY KEY (user_track_id),
   FOREIGN KEY (user_id) REFERENCES user(user_id),
   FOREIGN KEY (track_id) REFERENCES track(track_id)
);

-- Following
CREATE TABLE user_artist (
   user_artist_id INTEGER NOT NULL AUTO_INCREMENT,
   user_id VARCHAR(36) NOT NULL, -- UUID 36
   artist_id VARCHAR(36) NOT NULL, -- UUID 36

   PRIMARY KEY (user_artist_id),
   FOREIGN KEY (user_id) REFERENCES user(user_id),
   FOREIGN KEY (artist_id) REFERENCES artist(artist_id)
);

-- Saved Album
CREATE TABLE user_album (
   user_album_id INTEGER NOT NULL AUTO_INCREMENT,
   user_id VARCHAR(36) NOT NULL, -- UUID 36
   album_id VARCHAR(36) NOT NULL, -- UUID 36

   PRIMARY KEY (user_album_id),
   FOREIGN KEY (user_id) REFERENCES user(user_id),
   FOREIGN KEY (album_id) REFERENCES album(album_id)
);

-- Saved Playlist
CREATE TABLE user_playlist (
   user_playlist_id INTEGER NOT NULL AUTO_INCREMENT,
   user_id VARCHAR(36) NOT NULL, -- UUID 36
   playlist_id VARCHAR(36) NOT NULL, -- UUID 36

   PRIMARY KEY (user_playlist_id),
   FOREIGN KEY (user_id) REFERENCES user(user_id),
   FOREIGN KEY (playlist_id) REFERENCES playlist(playlist_id)
);

USE msa;

-- ==================================================
-- INSERT ARTISTS
-- ==================================================

INSERT INTO artist (artist_id, name, verified, followers, monthly_listeners, profile_photo)
VALUES
('9d220c9b-d1b8-41a7-8286-8a1c5b0936f5', 'IU', true, 36473829, 82938475, 'iu-profile-photo.png'),
('8b65089c-2a07-47ad-a5e3-9bf8bd612a4e', 'Taeyeon', true, 48594032, 76243895, 'taeyeon-profile-photo.png'),
('4917869d-67a3-47d7-9b76-b1808e51d741', 'aespa', true, 12897543, 76324567, 'aespa-profile-photo.png'),
('9561cd1a-5354-4f89-8ce3-923302e29963', 'BLACKPINK', true, 54876321, 98765432, 'blackpink-profile-photo.png'),
('f4f2c768-e96a-4956-8f78-262eedd8cb24', 'ROSÉ', true, 12345678, 45612378, 'rose-profile-photo.png'),
('18a7b21d-467b-4812-a3c2-a114c91e740c', 'Namie Amuro', true, 76543210, 54378912, 'namie-amuro-profile-photo.png'),
('17315002-a20f-4241-9b24-d72a29a0b4db', 'Ounuki Taeko', true, 45678932, 34567890, 'ounuki-taeko-profile-photo.png'),
('c483494f-8fa3-4c17-a727-cccb45a32600', 'Yumi Matsutoya', true, 23456789, 38490023, 'yumi-matsutoya-profile-photo.png'),
('bb1980c2-86d5-4c38-b77a-d6e3c21964c4', 'Yonezu Kenshi', true, 23229837, 27384933, 'yonezu-kenshi-profile-photo.png'),
('7ff76430-e0b4-4b31-a29b-1264b91c32a9', 'Taylor Swift', true, 98765421, 87736483, 'taylor-swift-profile-photo.png'),
('2abbc2a4-7510-4d58-bdf9-fd0bed3abaf3', 'The Weeknd', true, 93456721, 84563210, 'the-weeknd-profile-photo.png'),
('1847a033-9be6-425f-83be-2ad7b7c472cf', 'Kanye West', true, 82726602, 98732109, 'kanye-west-profile-photo.png'),
('3d699ef7-ae5b-4210-8102-c91bfc302ca0', 'Mac Miller', true, 98734567, 88726352, 'mac-miller-profile-photo.png'),
('ebc613b6-1e26-42d6-b610-40ab15796668', 'Baby Keem', true, 82737721, 88711672, 'baby-keem-profile-photo.png'),
('da19bb2c-28ef-4a8b-984e-48a6df1cbd44', 'Kendrick Lamar', true, 87654329, 87654321, 'kendrick-lamar-profile-photo.png'),
('9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0', 'Frank Ocean', true, 74638847, 762469, 'frank-ocean-profile-photo.png'),
('8d0a8339-8b2d-4adf-b7c7-91bc03202490', 'Dua Lipa', true, 82737748, 98712345, 'dua-lipa-profile-photo.png'),
('bda3053c-7ffb-4cbe-afb8-73d5cf1ba794', 'Coldplay', true, 77463743, 83746620, 'coldplay-profile-photo.png'),
('68fff186-c5c4-4dd7-8563-95f31e397f77', 'Jolin Tsai', true, 67584932, 45678910, 'jolin-tsai-profile-photo.png'),
('a489c414-d292-44d9-a158-f1dcd103f7c7', 'Kimberley Chen', true, 17283744, 32456789, 'kimberley-chen-profile-photo.png');

-- ==================================================
-- INSERT ALBUMS
-- ==================================================

-- LILAC --
INSERT INTO album (album_id, title, disc_type, cover_art, label, release_date, duration) 
VALUES ('5d66351d-addd-49ac-84a9-dbde46ab5384', "IU 5th Album 'LILAC'", 'Album', 'iu-lilac-cover.png', '2021 EDAM Entertainment', '2021-03-25', '00:36:31');

INSERT INTO album_artist (album_id, artist_id) 
VALUES ('5d66351d-addd-49ac-84a9-dbde46ab5384', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5');

INSERT INTO track (track_id, album_id, title, disc_number, track_number, duration, is_explicit, plays, source_file) 
VALUES 
('102a79ab-9cb3-42d1-8154-b3e445ad2ae4', '5d66351d-addd-49ac-84a9-dbde46ab5384', 'LILAC', 0, 1, '00:03:34', false, 170620309, 'LILAC.flac'),
('4a205368-6125-4c28-9c08-3acdaf09408f', '5d66351d-addd-49ac-84a9-dbde46ab5384', 'Flu', 0, 2, '00:03:08', false, 15203421, 'Flu.flac'),
('435bad1a-705d-4630-8fbe-04f708156f77', '5d66351d-addd-49ac-84a9-dbde46ab5384', 'Coin', 0, 3, '00:03:13', false, 20394823, 'Coin.flac'),
('73511ba4-4b9e-4b56-a534-433e16760d40', '5d66351d-addd-49ac-84a9-dbde46ab5384', 'Hi spring Bye', 0, 4, '00:05:24', false, 12908345, 'HiSpringBye.flac'),
('a7527814-a93d-464c-a9fd-bdc8fce87b5d', '5d66351d-addd-49ac-84a9-dbde46ab5384', 'Celebrity', 0, 5, '00:03:15', false, 83928374, 'Celebrity.flac'),
('b58aa1bf-cf6d-4746-8fc4-81d8cfcaea5f', '5d66351d-addd-49ac-84a9-dbde46ab5384', 'Troll (feat. DEAN)', 0, 6, '00:03:09', false, 20874365, 'Troll.flac'),
('5b71ce2d-2c82-4165-a0e5-d2b7a6d6623e', '5d66351d-addd-49ac-84a9-dbde46ab5384', 'Empty Cup', 0, 7, '00:02:19', false, 18347563, 'EmptyCup.flac'),
('faf7b2e7-3e3e-4938-84d7-fa52c4ea5661', '5d66351d-addd-49ac-84a9-dbde46ab5384', 'My Sea', 0, 8, '00:05:16', false, 21567392, 'MySea.flac'),
('cbc28265-4ae4-43f5-bcc8-532f9c675745', '5d66351d-addd-49ac-84a9-dbde46ab5384', 'Ah Puh', 0, 9, '00:03:20', false, 19287463, 'AhPuh.flac'),
('6e56c0a7-37f2-4657-83cc-52f833a01688', '5d66351d-addd-49ac-84a9-dbde46ab5384', 'Epilogue', 0, 10, '00:03:49', false, 17654321, 'Epilogue.flac');

INSERT INTO track_artist (track_id, artist_id)
VALUES 
('102a79ab-9cb3-42d1-8154-b3e445ad2ae4', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5'),
('4a205368-6125-4c28-9c08-3acdaf09408f', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5'),
('435bad1a-705d-4630-8fbe-04f708156f77', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5'),
('73511ba4-4b9e-4b56-a534-433e16760d40', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5'),
('a7527814-a93d-464c-a9fd-bdc8fce87b5d', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5'),
('b58aa1bf-cf6d-4746-8fc4-81d8cfcaea5f', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5'),
('5b71ce2d-2c82-4165-a0e5-d2b7a6d6623e', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5'),
('faf7b2e7-3e3e-4938-84d7-fa52c4ea5661', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5'),
('cbc28265-4ae4-43f5-bcc8-532f9c675745', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5'),
('6e56c0a7-37f2-4657-83cc-52f833a01688', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5');

-- ======================================================================================================================

-- Love poem --
INSERT INTO album (album_id, title, disc_type, cover_art, label, release_date, duration) 
VALUES ('07f261b7-8c5f-4a53-aaed-b269e64f03c1', 'Love poem', 'Album', 'iu-love-poem-cover.png', '2019 Kakao Entertainment', '2019-11-18', '00:24:58');

INSERT INTO album_artist (album_id, artist_id) 
VALUES ('07f261b7-8c5f-4a53-aaed-b269e64f03c1', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5');

INSERT INTO track (track_id, album_id, title, disc_number, track_number, duration, is_explicit, plays, source_file) 
VALUES 
('987b56ac-a64a-4498-bbd1-e283526882a1', '07f261b7-8c5f-4a53-aaed-b269e64f03c1', 'unlucky', 0, 1, '00:03:51', false, 20567890, 'unlucky.flac'),
('86f023fb-2608-4c59-820c-41710656037c', '07f261b7-8c5f-4a53-aaed-b269e64f03c1', 'The visitor', 0, 2, '00:03:51', false, 18907654, 'TheVisitor.flac'),
('82be37dc-fede-47b6-a160-b2a6e047658a', '07f261b7-8c5f-4a53-aaed-b269e64f03c1', 'Blueming', 0, 3, '00:03:37', false, 89302938, 'Blueming.flac'),
('81a1891a-12ef-45a1-9e51-870f94a5ab45', '07f261b7-8c5f-4a53-aaed-b269e64f03c1', 'above the time', 0, 4, '00:05:00', false, 21345678, 'aboveTheTime.flac'),
('395f889b-026b-4b80-bf82-817dcbff1506', '07f261b7-8c5f-4a53-aaed-b269e64f03c1', 'Lullaby', 0, 5, '00:04:21', false, 27654321, 'Lullaby.flac'),
('6596c675-859f-4bb8-b53f-a8f4ca34780d', '07f261b7-8c5f-4a53-aaed-b269e64f03c1', 'Love poem', 0, 6, '00:04:18', false, 30876543, 'LovePoem.flac');

INSERT INTO track_artist (track_id, artist_id)
VALUES 
('987b56ac-a64a-4498-bbd1-e283526882a1', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5'),
('86f023fb-2608-4c59-820c-41710656037c', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5'),
('82be37dc-fede-47b6-a160-b2a6e047658a', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5'),
('81a1891a-12ef-45a1-9e51-870f94a5ab45', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5'),
('395f889b-026b-4b80-bf82-817dcbff1506', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5'),
('6596c675-859f-4bb8-b53f-a8f4ca34780d', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5');

-- ======================================================================================================================

-- BBIBBI --
INSERT INTO album (album_id, title, disc_type, cover_art, label, release_date, duration) 
VALUES ('0d06e71e-f93a-4fd2-b915-d90ae5b58531', 'BBIBBI', 'Single', 'iu-bbibbi-cover.png', '2018 Kakao Entertainment', '2018-10-10', '00:03:14');

INSERT INTO album_artist (album_id, artist_id) 
VALUES ('0d06e71e-f93a-4fd2-b915-d90ae5b58531', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5');

INSERT INTO track (track_id, album_id, title, disc_number, track_number, duration, is_explicit, plays, source_file) 
VALUES ('7ecdde2a-1696-4b45-a1e2-666e50789244', '0d06e71e-f93a-4fd2-b915-d90ae5b58531', 'BBIBBI', 0, 1, '00:03:14', false, 175567890, 'BBIBBI.flac');

INSERT INTO track_artist (track_id, artist_id)
VALUES ('7ecdde2a-1696-4b45-a1e2-666e50789244', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5');

-- ======================================================================================================================

-- My Voice - The 1st Album (Deluxe Edition) --
INSERT INTO album (album_id, title, disc_type, cover_art, label, release_date, duration) 
VALUES ('e774ebae-f170-4e55-9d06-8269d4b6d1a4', 'My Voice - The 1st Album (Deluxe Edition)', 'Album', 'taeyeon-my-voice-cover.png', '2017 SM Entertainment', '2017-04-05', '00:55:45');

INSERT INTO album_artist (album_id, artist_id) 
VALUES ('e774ebae-f170-4e55-9d06-8269d4b6d1a4', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e');

INSERT INTO track (track_id, album_id, title, disc_number, track_number, duration, is_explicit, plays, source_file) 
VALUES 
('df3941aa-a06f-4d00-adc4-715e9182895f', 'e774ebae-f170-4e55-9d06-8269d4b6d1a4', 'Make Me Love You', 0, 1, '00:03:33', false, 23674598, 'MakeMeLoveYou.flac'),
('e3b93684-b1cc-4c14-9438-28ba0847e221', 'e774ebae-f170-4e55-9d06-8269d4b6d1a4', 'Fine', 0, 2, '00:03:29', false, 37654321, 'Fine.flac'),
('0e88417b-d7e0-4649-8b16-49c9808cc51f', 'e774ebae-f170-4e55-9d06-8269d4b6d1a4', 'Cover Up', 0, 3, '00:03:25', false, 18907654, 'CoverUp.flac'),
('5ba34102-428b-4bc2-9a5b-8c555f0fa689', 'e774ebae-f170-4e55-9d06-8269d4b6d1a4', 'Feel So Fine', 0, 4, '00:03:39', false, 20567890, 'FeelSoFine.flac'),
('f1dae6e0-3b7f-49ac-aa3b-f5e8e8eacc37', 'e774ebae-f170-4e55-9d06-8269d4b6d1a4', 'I Got Love', 0, 5, '00:03:10', false, 40876543, 'IGotLove.flac'),
('76a108c8-1aaf-4931-b27a-22e027baae62', 'e774ebae-f170-4e55-9d06-8269d4b6d1a4', "I'm OK", 0, 6, '00:03:34', false, 23456789, 'ImOK.flac'),
('e1368a78-830a-431d-8698-fc352baaa023', 'e774ebae-f170-4e55-9d06-8269d4b6d1a4', 'Time Lapse', 0, 7, '00:04:14', false, 27654321, 'TimeLapse.flac'),
('98231240-288b-446e-b7d7-9038a71dfd52', 'e774ebae-f170-4e55-9d06-8269d4b6d1a4', 'Sweet Love', 0, 8, '00:03:04', false, 32098765, 'SweetLove.flac'),
('37d341b0-d5f6-482d-9a30-b343d1646735', 'e774ebae-f170-4e55-9d06-8269d4b6d1a4', 'When I Was Young', 0, 9, '00:03:52', false, 19876543, 'WhenIWasYoung.flac'),
('3c2d1a0c-ae2a-47bb-985f-34634fc15377', 'e774ebae-f170-4e55-9d06-8269d4b6d1a4', 'I Blame On You', 0, 10, '00:03:23', false, 2930482, 'IBlameOnYou.flac'),
('2ba5bfea-b4a0-4f7c-92b2-3abfbd1bfe28', 'e774ebae-f170-4e55-9d06-8269d4b6d1a4', 'Lonely Night', 0, 11, '00:03:43', false, 28765432, 'LonelyNight.flac'),
('8080e765-8b60-43fe-8e1d-ea597d128dec', 'e774ebae-f170-4e55-9d06-8269d4b6d1a4', '11:11', 0, 12, '00:03:43', false, 77283940, '11_11.flac'),
('9f35fa7a-b4c3-43bd-a407-db085b52dbb4', 'e774ebae-f170-4e55-9d06-8269d4b6d1a4', 'Love in Color', 0, 13, '00:02:57', false, 18907654, 'LoveInColor.flac'),
('041fadf4-e4f2-4865-9b14-cb4a8a5cfb99', 'e774ebae-f170-4e55-9d06-8269d4b6d1a4', 'Fire', 0, 14, '00:03:07', false, 32098765, 'Fire.flac'),
('3292a582-9d5e-4822-952f-867aefc42644', 'e774ebae-f170-4e55-9d06-8269d4b6d1a4', 'Eraser', 0, 15, '00:02:54', false, 28765432, 'Eraser.flac'),
('63187b4e-dc87-407e-bfc0-c4e1580a5417', 'e774ebae-f170-4e55-9d06-8269d4b6d1a4', 'Curtain Call', 0, 16, '00:03:52', false, 19876543, 'CurtainCall.flac');

INSERT INTO track_artist (track_id, artist_id)
VALUES 
('df3941aa-a06f-4d00-adc4-715e9182895f', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('e3b93684-b1cc-4c14-9438-28ba0847e221', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('0e88417b-d7e0-4649-8b16-49c9808cc51f', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('5ba34102-428b-4bc2-9a5b-8c555f0fa689', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('f1dae6e0-3b7f-49ac-aa3b-f5e8e8eacc37', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('76a108c8-1aaf-4931-b27a-22e027baae62', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('e1368a78-830a-431d-8698-fc352baaa023', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('98231240-288b-446e-b7d7-9038a71dfd52', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('37d341b0-d5f6-482d-9a30-b343d1646735', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('3c2d1a0c-ae2a-47bb-985f-34634fc15377', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('2ba5bfea-b4a0-4f7c-92b2-3abfbd1bfe28', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('8080e765-8b60-43fe-8e1d-ea597d128dec', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('9f35fa7a-b4c3-43bd-a407-db085b52dbb4', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('041fadf4-e4f2-4865-9b14-cb4a8a5cfb99', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('3292a582-9d5e-4822-952f-867aefc42644', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('63187b4e-dc87-407e-bfc0-c4e1580a5417', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e');

-- ======================================================================================================================

-- INVU - The 3rd Album --
INSERT INTO album (album_id, title, disc_type, cover_art, label, release_date, duration) 
VALUES ('88e0b6ea-6203-4efd-a4ce-7900819b7044', 'INVU - The 3rd Album', 'Album', 'taeyeon-invu-cover.png', '2022 SM Entertainment', '2022-02-14', '00:42:26');

INSERT INTO album_artist (album_id, artist_id) 
VALUES ('88e0b6ea-6203-4efd-a4ce-7900819b7044', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e');

INSERT INTO track (track_id, album_id, title, disc_number, track_number, duration, is_explicit, plays, source_file) 
VALUES 
('ba0537ab-4b0c-475c-9aba-73318fc36130', '88e0b6ea-6203-4efd-a4ce-7900819b7044', 'INVU', 0, 1, '00:03:24', false, 83728394, 'INVU.flac'),
('645363de-f582-4224-b076-2979f9a1a16c', '88e0b6ea-6203-4efd-a4ce-7900819b7044', 'Some Nights', 0, 2, '00:03:27', false, 2938495, 'SomeNights.flac'),
('52aa15ee-a364-4669-b0b3-c9763a5e601d', '88e0b6ea-6203-4efd-a4ce-7900819b7044', "Can't Control Myself", 0, 3, '00:03:01', false, 12829302, 'CantControllMyself.flac'),
('13efe16f-2eea-435d-b553-c0532e42abb0', '88e0b6ea-6203-4efd-a4ce-7900819b7044', 'Set Myself On Fire', 0, 4, '00:02:37', false, 74839401, 'SetMyselfOnFire.flac'),
('f3690413-dc05-4de2-b706-a1aef78769fc', '88e0b6ea-6203-4efd-a4ce-7900819b7044', 'Toddler', 0, 5, '00:03:08', false, 2938495, 'Toddler.flac'),
('227240d4-fc26-4d31-96e3-ca53a5fe25bf', '88e0b6ea-6203-4efd-a4ce-7900819b7044', 'Siren', 0, 6, '00:03:09', false, 19283742, 'Siren.flac'),
('8181f5d7-2d6f-4733-9fac-e12680858e85', '88e0b6ea-6203-4efd-a4ce-7900819b7044', 'Cold As Hell', 0, 7, '00:02:44', false, 29384930, 'ColdAsHell.flac'),
('445cc472-e69c-40db-85d0-f6de281411b8', '88e0b6ea-6203-4efd-a4ce-7900819b7044', 'Timeless', 0, 8, '00:03:22', false, 28392817, 'Timeless.flac'),
('727a7122-4137-4292-bb8e-96bcf6561324', '88e0b6ea-6203-4efd-a4ce-7900819b7044', 'Heart', 0, 9, '00:03:52', false, 3948372, 'Heart.flac'),
('16d67efb-9e1a-4964-a719-b17025a9c640', '88e0b6ea-6203-4efd-a4ce-7900819b7044', 'No Love Again', 0, 10, '00:03:14', false, 59382718, 'NoLoveAgain.flac'),
('825f7627-cab4-476d-8858-204ca0c49636', '88e0b6ea-6203-4efd-a4ce-7900819b7044', 'You Better Not', 0, 11, '00:02:34', false, 8293842, 'YouBetterNot.flac'),
('af81962b-8b3e-4ded-a4c1-8ec9aae1e5de', '88e0b6ea-6203-4efd-a4ce-7900819b7044', 'Weekend', 0, 12, '00:03:53', false, 89293899, 'Weekend.flac'),
('a6132ff9-eda6-4326-a1a9-a980ef71bec1', '88e0b6ea-6203-4efd-a4ce-7900819b7044', 'Ending Credits', 0, 13, '00:03:53', false, 2839483, 'EndingCredits.flac');

INSERT INTO track_artist (track_id, artist_id)
VALUES 
('ba0537ab-4b0c-475c-9aba-73318fc36130', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('645363de-f582-4224-b076-2979f9a1a16c', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('52aa15ee-a364-4669-b0b3-c9763a5e601d', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('13efe16f-2eea-435d-b553-c0532e42abb0', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('f3690413-dc05-4de2-b706-a1aef78769fc', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('227240d4-fc26-4d31-96e3-ca53a5fe25bf', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('8181f5d7-2d6f-4733-9fac-e12680858e85', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('445cc472-e69c-40db-85d0-f6de281411b8', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('727a7122-4137-4292-bb8e-96bcf6561324', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('16d67efb-9e1a-4964-a719-b17025a9c640', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('825f7627-cab4-476d-8858-204ca0c49636', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('af81962b-8b3e-4ded-a4c1-8ec9aae1e5de', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'),
('a6132ff9-eda6-4326-a1a9-a980ef71bec1', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e');

-- ======================================================================================================================

-- I Do --

-- ======================================================================================================================

-- VOICE --

-- ======================================================================================================================

-- BORN PINK --

-- ======================================================================================================================

-- Girls - The 2nd Mini Album --

-- ======================================================================================================================

-- Blonde --
INSERT INTO album (album_id, title, disc_type, cover_art, label, release_date, duration)
VALUES ('2958ed40-da38-49ae-af5d-78579f9332a6', 'Blonde', 'Album', 'blonde-cover.png', "2016 Boys Don't Cry", '2016-08-20', '01:00:00');

INSERT INTO album_artist (album_id, artist_id) 
VALUES ('2958ed40-da38-49ae-af5d-78579f9332a6', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0');

INSERT INTO track (track_id, album_id, title, disc_number, track_number, duration, is_explicit, plays, source_file) 
VALUES 
('d93794ec-e5ca-45d8-a71a-473d81072cfd', '2958ed40-da38-49ae-af5d-78579f9332a6', 'Nikes', 0, 1, '00:05:14', true, 12345678, 'Nikes.flac'),
('06e14ad5-a912-48f5-a29e-ce11054a420d', '2958ed40-da38-49ae-af5d-78579f9332a6', 'Ivy', 0, 2, '00:04:09', true, 38492882, 'Ivy.flac'),
('9d38a6d1-d977-45c3-b81d-e69253365c6a', '2958ed40-da38-49ae-af5d-78579f9332a6', 'Pink + White', 0, 3, '00:03:04', false, 17266638, 'PinkWhite.flac'),
('6bd9373d-c88b-4b5e-8d32-c57e60c26ed8', '2958ed40-da38-49ae-af5d-78579f9332a6', 'Be Yourself (Interlude)', 0, 4, '00:01:27', false, 22738994, 'BeYourself.flac'),
('09e1e8dd-d88a-4df7-b38f-b4b2aac5da23', '2958ed40-da38-49ae-af5d-78579f9332a6', 'Solo', 0, 5, '00:04:17', true, 28399092, 'Solo.flac'),
('cb72be78-1398-4138-a041-4f8f1e858102', '2958ed40-da38-49ae-af5d-78579f9332a6', 'Skyline To', 0, 6, '00:03:05', true, 12838832, 'SkylineTo.flac'),
('a77fc6f3-873f-465b-9c97-596597392619', '2958ed40-da38-49ae-af5d-78579f9332a6', 'Self Control', 0, 7, '00:04:09', false, 78641246, 'SelfControl.flac'),
('dae1563a-e0a2-4b16-b3d1-73995cb8010a', '2958ed40-da38-49ae-af5d-78579f9332a6', 'Good Guy', 0, 8, '00:01:06', false, 47858377, 'GoodGuy.flac'),
('be65d857-3fca-4a7f-b3a7-fa306b77ece8', '2958ed40-da38-49ae-af5d-78579f9332a6', 'Nights', 0, 9, '00:05:07', true, 23198649, 'Nights.flac'),
('8463b4bc-9f3a-4d76-a4e2-50c784f6be80', '2958ed40-da38-49ae-af5d-78579f9332a6', 'Solo (Reprise)', 0, 10, '00:01:18', false, 58972365, 'SoloReprise.flac'),
('f04f9a16-be14-4db1-9029-17d4e2a90407', '2958ed40-da38-49ae-af5d-78579f9332a6', 'Pretty Sweet', 0, 11, '00:02:38', true, 23756222, 'PrettySweet.flac'),
('09320a63-6330-4eb5-95c5-30c4a3ea8dd9', '2958ed40-da38-49ae-af5d-78579f9332a6', 'Facebook Story (Interlude)', 0, 12, '00:01:10', false, 12463587, 'FacebookStory.flac'),
('ee88e624-1223-49eb-8a1e-c3c11519e53e', '2958ed40-da38-49ae-af5d-78579f9332a6', 'Close to You', 0, 13, '00:01:25', false, 23589762, 'CloseToYou.flac'),
('21c68201-6139-4df1-a7db-f52e3a81f578', '2958ed40-da38-49ae-af5d-78579f9332a6', 'White Ferrari', 0, 14, '00:04:08', false, 31467865, 'WhiteFerrari.flac'),
('f9537956-b242-4db2-bb36-e1d5b18ad3dd', '2958ed40-da38-49ae-af5d-78579f9332a6', 'Seigfried', 0, 15, '00:05:34', false, 24357876, 'Seigfried.flac'),
('93ec4efa-9b5f-4167-ae1c-c80bbbae1c4a', '2958ed40-da38-49ae-af5d-78579f9332a6', 'Godspeed', 0, 16, '00:02:57', false, 12377823, 'Godspeed.flac'),
('529aeac7-1628-4da2-a8fa-bbbf81eb1057', '2958ed40-da38-49ae-af5d-78579f9332a6', 'Futura Free', 0, 17, '00:09:24', true, 23147856, 'FuturaFree.flac');

INSERT INTO track_artist (track_id, artist_id)
VALUES 
('d93794ec-e5ca-45d8-a71a-473d81072cfd', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0'),
('06e14ad5-a912-48f5-a29e-ce11054a420d', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0'),
('9d38a6d1-d977-45c3-b81d-e69253365c6a', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0'),
('6bd9373d-c88b-4b5e-8d32-c57e60c26ed8', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0'),
('09e1e8dd-d88a-4df7-b38f-b4b2aac5da23', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0'),
('cb72be78-1398-4138-a041-4f8f1e858102', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0'),
('a77fc6f3-873f-465b-9c97-596597392619', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0'),
('dae1563a-e0a2-4b16-b3d1-73995cb8010a', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0'),
('be65d857-3fca-4a7f-b3a7-fa306b77ece8', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0'),
('8463b4bc-9f3a-4d76-a4e2-50c784f6be80', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0'),
('f04f9a16-be14-4db1-9029-17d4e2a90407', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0'),
('09320a63-6330-4eb5-95c5-30c4a3ea8dd9', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0'),
('ee88e624-1223-49eb-8a1e-c3c11519e53e', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0'),
('21c68201-6139-4df1-a7db-f52e3a81f578', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0'),
('f9537956-b242-4db2-bb36-e1d5b18ad3dd', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0'),
('93ec4efa-9b5f-4167-ae1c-c80bbbae1c4a', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0'),
('529aeac7-1628-4da2-a8fa-bbbf81eb1057', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0');

-- ======================================================================================================================

-- The Melodic Blue --
INSERT INTO album (album_id, title, disc_type, cover_art, label, release_date, duration)
VALUES ('7c8da1d1-e7be-4f60-9044-073c2f898d28', 'The Melodic Blue', 'Album', 'the-melodic-blue-cover.png', '2021 Columbia Records', '2021-09-22', '01:03:00');

INSERT INTO album_artist (album_id, artist_id) 
VALUES ('7c8da1d1-e7be-4f60-9044-073c2f898d28', 'ebc613b6-1e26-42d6-b610-40ab15796668');

INSERT INTO track (track_id, album_id, title, disc_number, track_number, duration, is_explicit, plays, source_file) 
VALUES 
('eb87a77d-3c3e-4e14-a090-cc02f2198c29', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'trademark usa', 1, 1, '00:04:30', true, 12345678, 'trademarkusa.flac'),
('92479d09-77d4-46bf-be40-744a504db387', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'pink panties', 1, 2, '00:02:43', true, 38492882, 'pinkpanties.flac'),
('6de7732e-c29d-40a5-8cf2-1458371813c9', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'scapegoats', 1, 3, '00:01:16', true, 17266638, 'scapegoats.flac'),
('3fa9cc0f-7f32-4758-a582-9f2527c6677c', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'range brothers (with Kendrick Lamar)', 1, 4, '00:05:16', true, 78641246, 'rangebrothers.flac'),
('b7454e1c-8912-4f2b-9fd5-bb8dfd23192c', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'issues', 1, 5, '00:03:39', true, 28399092, 'issues.flac'),
('bc7dc544-91ed-4042-b10e-5c49e1de2ea1', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'gorgeous', 1, 6, '00:02:20', true, 12838832, 'gorgeous.flac'),
('4b27deaa-4c77-4251-b7bf-d39757d4895e', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'south africa', 1, 7, '00:02:54', true, 78641246, 'southafrica.flac'),
('4492a976-7dc3-4f6b-8a4d-f64d235fd8ec', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'lost souls', 1, 8, '00:04:29', true, 47858377, 'lostsouls.flac'),
('36261c85-d66e-4250-b3ad-7b4c517d3b54', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'cocoa (with Don Toliver)', 1, 9, '00:03:49', true, 23198649, 'cocoa.flac'),
('d873e719-d033-48f4-b571-4b48c2d4f929', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'family ties (with Kendrick Lamar)', 1, 10, '00:04:12', true, 58972365, 'familyties.flac'),
('9043e416-7d40-4533-be30-265db04fcb45', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'scars', 1, 11, '00:04:26', true, 23756222, 'scars.flac'),
('4d216a58-a7c0-4c0c-b594-ce171719981c', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'durag activity (with Travis Scott)', 1, 12, '00:03:44', true, 12463587, 'duragactivity.flac'),
('6f0caa81-05bb-409e-b32e-487a682bff8c', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'booman', 1, 13, '00:02:35', true, 23589762, 'booman.flac'),
('342699e6-d989-440b-a9d1-e4e8efdb78bf', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'first order of business', 1, 14, '00:02:48', true, 31467865, 'firstorderofbusiness.flac'),
('69e8f583-ee07-4c73-be68-25c9b06c0e47', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'vent', 1, 15, '00:02:16', true, 24357876, 'vent.flac'),
('8f3e54be-cda3-4aec-843d-0015729ee7e9', '7c8da1d1-e7be-4f60-9044-073c2f898d28', '16', 1, 16, '00:02:36', true, 12377823, '16.flac'),
('c3923430-7baa-4fed-ae8d-de7c428f7708', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'lost souls (with Brent Faiyaz)', 2, 1, '00:04:29', true, 23147856, 'lostsouls.flac'),
('636f1e57-6c90-4c99-abd6-7df1d85a7402', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'hooligan', 2, 2, '00:02:36', true, 23147856, 'hooligan.flac'),
('2cffcdf7-5bcc-49b9-8804-b158f782af5e', '7c8da1d1-e7be-4f60-9044-073c2f898d28', 'no sense', 2, 3, '00:02:53', true, 23147856, 'nosense.flac');

INSERT INTO track_artist (track_id, artist_id)
VALUES 
('eb87a77d-3c3e-4e14-a090-cc02f2198c29', 'ebc613b6-1e26-42d6-b610-40ab15796668'),
('92479d09-77d4-46bf-be40-744a504db387', 'ebc613b6-1e26-42d6-b610-40ab15796668'),
('6de7732e-c29d-40a5-8cf2-1458371813c9', 'ebc613b6-1e26-42d6-b610-40ab15796668'),
('3fa9cc0f-7f32-4758-a582-9f2527c6677c', 'ebc613b6-1e26-42d6-b610-40ab15796668'),
('3fa9cc0f-7f32-4758-a582-9f2527c6677c', 'da19bb2c-28ef-4a8b-984e-48a6df1cbd44'), -- Kendrick Lamar
('b7454e1c-8912-4f2b-9fd5-bb8dfd23192c', 'ebc613b6-1e26-42d6-b610-40ab15796668'),
('bc7dc544-91ed-4042-b10e-5c49e1de2ea1', 'ebc613b6-1e26-42d6-b610-40ab15796668'),
('4b27deaa-4c77-4251-b7bf-d39757d4895e', 'ebc613b6-1e26-42d6-b610-40ab15796668'),
('4492a976-7dc3-4f6b-8a4d-f64d235fd8ec', 'ebc613b6-1e26-42d6-b610-40ab15796668'),
('36261c85-d66e-4250-b3ad-7b4c517d3b54', 'ebc613b6-1e26-42d6-b610-40ab15796668'), -- agregar Don Toliver
('d873e719-d033-48f4-b571-4b48c2d4f929', 'ebc613b6-1e26-42d6-b610-40ab15796668'),
('d873e719-d033-48f4-b571-4b48c2d4f929', 'da19bb2c-28ef-4a8b-984e-48a6df1cbd44'), -- Kendrick Lamar
('9043e416-7d40-4533-be30-265db04fcb45', 'ebc613b6-1e26-42d6-b610-40ab15796668'),
('4d216a58-a7c0-4c0c-b594-ce171719981c', 'ebc613b6-1e26-42d6-b610-40ab15796668'), -- agregar Travis Scott
('6f0caa81-05bb-409e-b32e-487a682bff8c', 'ebc613b6-1e26-42d6-b610-40ab15796668'),
('342699e6-d989-440b-a9d1-e4e8efdb78bf', 'ebc613b6-1e26-42d6-b610-40ab15796668'),
('69e8f583-ee07-4c73-be68-25c9b06c0e47', 'ebc613b6-1e26-42d6-b610-40ab15796668'),
('8f3e54be-cda3-4aec-843d-0015729ee7e9', 'ebc613b6-1e26-42d6-b610-40ab15796668'),
('c3923430-7baa-4fed-ae8d-de7c428f7708', 'ebc613b6-1e26-42d6-b610-40ab15796668'), -- agregar Brent Faiyaz
('636f1e57-6c90-4c99-abd6-7df1d85a7402', 'ebc613b6-1e26-42d6-b610-40ab15796668'),
('2cffcdf7-5bcc-49b9-8804-b158f782af5e', 'ebc613b6-1e26-42d6-b610-40ab15796668');

-- ======================================================================================================================

-- Mr. Morale & The Big Steppers --

-- ======================================================================================================================

-- Donda --

-- ======================================================================================================================

-- Swimming --

-- ======================================================================================================================

-- Watching Movies With The Sound Off --

-- ======================================================================================================================

-- Dua Lipa (Deluxe Edition) --

-- ======================================================================================================================

-- Future Nostalgia (The Moonlight Edition) --


-- ==================================================
-- INSERT USERS
-- ==================================================

INSERT INTO user (user_id, name, email, password, profile_photo)
VALUES
('80b98b16-94da-4246-9996-6e74e9fff286', 'John Doe', 'johndoe0127@gmail.com', 'lyug*&^Fiuef', 'john-doe-profile-photo.png');

-- ==================================================
-- INSERT PLAYLISTS
-- ==================================================

-- ... --
INSERT INTO playlist (playlist_id, title, cover_art, created_by, is_public)
VALUES
('e1fb516b-d028-4c20-b3bc-081b1b75bd92', '...', 'e1fb516b-d028-4c20-b3bc-081b1b75bd92.png', '80b98b16-94da-4246-9996-6e74e9fff286', false);

INSERT INTO playlist_track (playlist_id, track_id)
VALUES
('e1fb516b-d028-4c20-b3bc-081b1b75bd92', '227240d4-fc26-4d31-96e3-ca53a5fe25bf'),
('e1fb516b-d028-4c20-b3bc-081b1b75bd92', 'af81962b-8b3e-4ded-a4c1-8ec9aae1e5de'),
('e1fb516b-d028-4c20-b3bc-081b1b75bd92', '435bad1a-705d-4630-8fbe-04f708156f77'),
('e1fb516b-d028-4c20-b3bc-081b1b75bd92', 'a7527814-a93d-464c-a9fd-bdc8fce87b5d'),
('e1fb516b-d028-4c20-b3bc-081b1b75bd92', '7ecdde2a-1696-4b45-a1e2-666e50789244'),
('e1fb516b-d028-4c20-b3bc-081b1b75bd92', '86f023fb-2608-4c59-820c-41710656037c'),
('e1fb516b-d028-4c20-b3bc-081b1b75bd92', '82be37dc-fede-47b6-a160-b2a6e047658a'),
('e1fb516b-d028-4c20-b3bc-081b1b75bd92', 'e3b93684-b1cc-4c14-9438-28ba0847e221'),
('e1fb516b-d028-4c20-b3bc-081b1b75bd92', '5ba34102-428b-4bc2-9a5b-8c555f0fa689'),
('e1fb516b-d028-4c20-b3bc-081b1b75bd92', '8080e765-8b60-43fe-8e1d-ea597d128dec'),
('e1fb516b-d028-4c20-b3bc-081b1b75bd92', '63187b4e-dc87-407e-bfc0-c4e1580a5417'),
('e1fb516b-d028-4c20-b3bc-081b1b75bd92', 'ba0537ab-4b0c-475c-9aba-73318fc36130'),
('e1fb516b-d028-4c20-b3bc-081b1b75bd92', '52aa15ee-a364-4669-b0b3-c9763a5e601d');

-- Praise Hiphop --
INSERT INTO playlist (playlist_id, title, cover_art, created_by, is_public)
VALUES
('00f6abe1-2395-4517-b73f-3f4c22bcca1e', 'Praise Hiphop', '00f6abe1-2395-4517-b73f-3f4c22bcca1e.png', '80b98b16-94da-4246-9996-6e74e9fff286', true);

INSERT INTO playlist_track (playlist_id, track_id)
VALUES
('00f6abe1-2395-4517-b73f-3f4c22bcca1e', '06e14ad5-a912-48f5-a29e-ce11054a420d'),
('00f6abe1-2395-4517-b73f-3f4c22bcca1e', '9d38a6d1-d977-45c3-b81d-e69253365c6a'),
('00f6abe1-2395-4517-b73f-3f4c22bcca1e', 'eb87a77d-3c3e-4e14-a090-cc02f2198c29'),
('00f6abe1-2395-4517-b73f-3f4c22bcca1e', '92479d09-77d4-46bf-be40-744a504db387'),
('00f6abe1-2395-4517-b73f-3f4c22bcca1e', 'd873e719-d033-48f4-b571-4b48c2d4f929');

-- ==================================================
-- INSERT USER LIBRARY
-- ==================================================

-- liked tracks
INSERT INTO user_track (user_id, track_id)
VALUES
('80b98b16-94da-4246-9996-6e74e9fff286', '8080e765-8b60-43fe-8e1d-ea597d128dec'), -- 11:11
('80b98b16-94da-4246-9996-6e74e9fff286', 'a7527814-a93d-464c-a9fd-bdc8fce87b5d'), -- Celebrity
('80b98b16-94da-4246-9996-6e74e9fff286', '06e14ad5-a912-48f5-a29e-ce11054a420d'), -- Ivy
('80b98b16-94da-4246-9996-6e74e9fff286', '9d38a6d1-d977-45c3-b81d-e69253365c6a'), -- Pink + White
('80b98b16-94da-4246-9996-6e74e9fff286', 'd873e719-d033-48f4-b571-4b48c2d4f929'), -- family ties (with Kendrick Lamar)
('80b98b16-94da-4246-9996-6e74e9fff286', '8f3e54be-cda3-4aec-843d-0015729ee7e9'), -- 16
('80b98b16-94da-4246-9996-6e74e9fff286', '7ecdde2a-1696-4b45-a1e2-666e50789244'), -- BBIBBI
('80b98b16-94da-4246-9996-6e74e9fff286', '82be37dc-fede-47b6-a160-b2a6e047658a'); -- Blueming

-- saved albums
INSERT INTO user_album (user_id, album_id)
VALUES
('80b98b16-94da-4246-9996-6e74e9fff286', '5d66351d-addd-49ac-84a9-dbde46ab5384'), -- LILAC
('80b98b16-94da-4246-9996-6e74e9fff286', 'e774ebae-f170-4e55-9d06-8269d4b6d1a4'), -- My Voice
('80b98b16-94da-4246-9996-6e74e9fff286', '2958ed40-da38-49ae-af5d-78579f9332a6'), -- Blonde
('80b98b16-94da-4246-9996-6e74e9fff286', '7c8da1d1-e7be-4f60-9044-073c2f898d28'); -- The Melodic Blue

-- followed artists
INSERT INTO user_artist (user_id, artist_id)
VALUES
('80b98b16-94da-4246-9996-6e74e9fff286', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5'), -- IU
('80b98b16-94da-4246-9996-6e74e9fff286', '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e'), -- Taeyeon
('80b98b16-94da-4246-9996-6e74e9fff286', '4917869d-67a3-47d7-9b76-b1808e51d741'), -- aespa
('80b98b16-94da-4246-9996-6e74e9fff286', '9561cd1a-5354-4f89-8ce3-923302e29963'), -- BLACKPINK
('80b98b16-94da-4246-9996-6e74e9fff286', 'f4f2c768-e96a-4956-8f78-262eedd8cb24'), -- ROSÉ
('80b98b16-94da-4246-9996-6e74e9fff286', '18a7b21d-467b-4812-a3c2-a114c91e740c'), -- Namie Amuro
('80b98b16-94da-4246-9996-6e74e9fff286', '17315002-a20f-4241-9b24-d72a29a0b4db'), -- Ounuki Taeko
('80b98b16-94da-4246-9996-6e74e9fff286', 'ebc613b6-1e26-42d6-b610-40ab15796668'), -- Baby Keem
('80b98b16-94da-4246-9996-6e74e9fff286', 'da19bb2c-28ef-4a8b-984e-48a6df1cbd44'), -- Kendrick Lamar
('80b98b16-94da-4246-9996-6e74e9fff286', '9a01c1fa-37eb-4d7b-80d6-9c1e7518fee0'), -- Frank Ocean
('80b98b16-94da-4246-9996-6e74e9fff286', '8d0a8339-8b2d-4adf-b7c7-91bc03202490'), -- Dua Lipa
('80b98b16-94da-4246-9996-6e74e9fff286', 'bda3053c-7ffb-4cbe-afb8-73d5cf1ba794'), -- Coldplay
('80b98b16-94da-4246-9996-6e74e9fff286', '68fff186-c5c4-4dd7-8563-95f31e397f77'); -- Jolin Tsai

-- saved playlists
INSERT INTO user_playlist (user_id, playlist_id)
VALUES
('80b98b16-94da-4246-9996-6e74e9fff286', 'e1fb516b-d028-4c20-b3bc-081b1b75bd92'), -- ...
('80b98b16-94da-4246-9996-6e74e9fff286', '00f6abe1-2395-4517-b73f-3f4c22bcca1e'); -- Praise Hiphop