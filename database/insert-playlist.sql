
USE music_streamer;

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
