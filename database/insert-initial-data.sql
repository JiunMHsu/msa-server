
USE music_streamer;

-- IU
INSERT INTO artist (artist_id, artist_name, verified, followers, monthly_listeners, profile_photo) 
VALUES ('9d220c9b-d1b8-41a7-8286-8a1c5b0936f5', 'IU', true, 8920393, 6938273, 'iu-profile-photo.png');


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


-- BBIBBI --
INSERT INTO album (album_id, title, disc_type, cover_art, label, release_date, duration) 
VALUES ('0d06e71e-f93a-4fd2-b915-d90ae5b58531', 'BBIBBI', 'Single', 'iu-bbibbi-cover.png', '2018 Kakao Entertainment', '2018-10-10', '00:03:14');

INSERT INTO album_artist (album_id, artist_id) 
VALUES ('0d06e71e-f93a-4fd2-b915-d90ae5b58531', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5');

INSERT INTO track (track_id, album_id, title, disc_number, track_number, duration, is_explicit, plays, source_file) 
VALUES ('7ecdde2a-1696-4b45-a1e2-666e50789244', '0d06e71e-f93a-4fd2-b915-d90ae5b58531', 'BBIBBI', 0, 1, '00:03:14', false, 175567890, 'BBIBBI.flac');

INSERT INTO track_artist (track_id, artist_id)
VALUES 
('7ecdde2a-1696-4b45-a1e2-666e50789244', '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5');



-- Taeyeon
INSERT INTO artist (artist_id, artist_name, verified, followers, monthly_listeners, profile_photo) 
VALUES ('8b65089c-2a07-47ad-a5e3-9bf8bd612a4e', 'Taeyeon', true, 2835456, 4513653, 'taeyeon-profile-photo.png');


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



-- !! FALTA INSERTAR PLAYLISTS Y TODO DE USERS 