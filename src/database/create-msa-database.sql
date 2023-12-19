drop database if exists music_streamer;
create database music_streamer;
use music_streamer;

create table artist (
   artist_id int not null auto_increment,
   artist_name varchar(50) not null,
   verified bool,
   followers int unsigned,
   monthly_listeners int unsigned,
   profile_photo varchar(255), -- path
   profile_banner varchar(255), -- path
   about varchar(255), -- path

   primary key (artist_id)
);

create table album (
   album_id int not null auto_increment,
   title varchar(255) not null,
   disc_type varchar(10) not null,
   cover_art varchar(255) not null, -- path
   label varchar(255) not null,
   release_date varchar(10), -- '0000-00-00'
   duration varchar(8), -- '00.00.00'

   primary key (album_id)
);

create table track (
   track_id int not null auto_increment,
   title varchar(255) not null,
   disc_number tinyint unsigned,
   track_number tinyint unsigned not null,
   writer varchar(255),
   producer varchar(255),
   duration varchar(8) not null, -- '00.00.00'
   is_explicit bool,
   plays int unsigned not null,
   lyrics varchar(255), -- path
   source_file varchar(255) not null, -- path

   primary key (track_id)
);

create table track_album (
   track_album_id int not null auto_increment,
   track_id int not null,
   album_id int not null,

   primary key (track_album_id),
   foreign key (track_id) references track(track_id),
   foreign key (album_id) references album(album_id)
);

create table album_artist (
   album_artist_id int not null auto_increment,
   artist_id int not null,
   album_id int not null,

   primary key (album_artist_id),
   foreign key (artist_id) references artist(artist_id),
   foreign key (album_id) references album(album_id)
);

create table artist_track (
   artist_track_id int not null auto_increment,
   artist_id int not null,
   track_id int not null,

   primary key (artist_track_id),
   foreign key (artist_id) references artist(artist_id),
   foreign key (track_id) references track(track_id)
);
