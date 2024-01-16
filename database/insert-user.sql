
USE music_streamer;

-- user info
INSERT INTO user (user_id, name, email, password, profile_photo)
VALUES
('80b98b16-94da-4246-9996-6e74e9fff286', 'John Doe', 'johndoe0127@gmail.com', 'lyug*&^Fiuef', 'john-doe-profile-photo.png');

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

