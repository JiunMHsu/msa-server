DROP DATABASE IF EXISTS msa;
CREATE DATABASE msa;
USE msa;

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
