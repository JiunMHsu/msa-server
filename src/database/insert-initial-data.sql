
use music_streamer;

-- Artist insertions
INSERT INTO artist (artist_name, verified, followers, monthly_listeners, profile_photo, profile_banner, about) 
VALUES 
('Kanye West', true, 15000000, 5000000, '/path/to/kanye_photo.jpg', '/path/to/kanye_banner.jpg', '/path/to/description/kanye_west.txt'),
('Taylor Swift', true, 20000000, 8000000, '/path/to/taylor_photo.jpg', '/path/to/taylor_banner.jpg', '/path/to/description/taylor_swift.txt'),
('Taeyeon', true, 3500000, 1500000, '/path/to/profile/taeyeon_profile.jpg', '/path/to/banner/taeyeon_banner.jpg', '/path/to/description/taeyeon.txt'),
('Namie Amuro', true, 5000000, 2000000, '/path/to/profile/namie_amuro_profile.jpg', '/path/to/banner/namie_amuro_banner.jpg', '/path/to/description/namie_amuro.txt');

-- album_id: 1, Yeezus
INSERT INTO album (title, disc_type, cover_art, label, release_date, duration)
VALUEs ('Yeezus', 'Album', '/path/to/cover/yeezus_cover.jpg', 'Def Jam Recordings', '2013-06-18', '00:40:00');

INSERT INTO album_artist (artist_id, album_id)
VALUES (1, 1);

-- track_id: 1~10
INSERT INTO track (title, disc_number, track_number, writer, producer, duration, is_explicit, plays, lyrics, source_file)
VALUES 
('On Sight', 1, 1, 'Kanye West', 'Daft Punk', '00:02:36', true, 1000000, '/path/to/lyrics/onsight.txt', '/path/to/tracks/onsight.mp3'),
('Black Skinhead', 1, 2, 'Kanye West', 'Daft Punk', '00:03:08', true, 1200000, '/path/to/lyrics/blackskinhead.txt', '/path/to/tracks/blackskinhead.mp3'),
('I Am a God', 1, 3, 'Kanye West', 'Kanye West', '00:03:51', true, 1400000, '/path/to/lyrics/iamagod.txt', '/path/to/tracks/iamagod.mp3'),
('New Slaves', 1, 4, 'Kanye West', 'Kanye West', '00:04:16', true, 1600000, '/path/to/lyrics/newslaves.txt', '/path/to/tracks/newslaves.mp3'),
('Hold My Liquor', 1, 5, 'Kanye West', 'Kanye West', '00:05:27', true, 1800000, '/path/to/lyrics/holdmyliquor.txt', '/path/to/tracks/holdmyliquor.mp3'),
('I\'m In It', 1, 6, 'Kanye West', 'Kanye West', '00:03:54', true, 1300000, '/path/to/lyrics/iminIt.txt', '/path/to/tracks/iminIt.mp3'),
('Blood on the Leaves', 1, 7, 'Kanye West', 'Kanye West', '00:06:00', true, 1700000, '/path/to/lyrics/bloodontheleaves.txt', '/path/to/tracks/bloodontheleaves.mp3'),
('Guilt Trip', 1, 8, 'Kanye West', 'Kanye West', '00:04:03', true, 1400000, '/path/to/lyrics/guilttrip.txt', '/path/to/tracks/guilttrip.mp3'),
('Send It Up', 1, 9, 'Kanye West', 'Kanye West', '00:02:58', true, 1500000, '/path/to/lyrics/senditup.txt', '/path/to/tracks/senditup.mp3'),
('Bound 2', 1, 10, 'Kanye West', 'Kanye West', '00:03:49', true, 1800000, '/path/to/lyrics/bound2.txt', '/path/to/tracks/bound2.mp3');

INSERT INTO track_album (track_id, album_id)
VALUES 
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1);

INSERT INTO artist_track (artist_id, track_id)
VALUES 
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10);


-- album_id: 2, Donda
INSERT INTO album (title, disc_type, cover_art, label, release_date, duration)
VALUES ('Donda', 'Album', '/path/to/cover/donda_cover.jpg', 'Getting Out Our Dreams II, LLC', '2021-08-29', '01:08:00');

INSERT INTO album_artist (artist_id, album_id)
VALUES (1, 2);

-- track_id: 11~37
INSERT INTO track (title, disc_number, track_number, writer, producer, duration, is_explicit, plays, lyrics, source_file)
VALUES 
('Donda Chant', 1, 1, 'Kanye West', 'Kanye West', '00:52:00', false, 500000, '/path/to/lyrics/dondachant.txt', '/path/to/tracks/dondachant.mp3'),
('Jail', 1, 2, 'Kanye West', 'Kanye West', '00:04:57', true, 1500000, '/path/to/lyrics/jail.txt', '/path/to/tracks/jail.mp3'),
('God Breathed', 1, 3, 'Kanye West', 'Kanye West', '00:05:34', false, 1000000, '/path/to/lyrics/godbreathed.txt', '/path/to/tracks/godbreathed.mp3'),
('Off The Grid', 1, 4, 'Kanye West', 'Kanye West', '00:05:39', true, 1800000, '/path/to/lyrics/offthegrid.txt', '/path/to/tracks/offthegrid.mp3'),
('Hurricane', 1, 5, 'Kanye West', 'Kanye West', '00:04:04', true, 1700000, '/path/to/lyrics/hurricane.txt', '/path/to/tracks/hurricane.mp3'),
('Praise God', 1, 6, 'Kanye West', 'Kanye West', '00:03:46', true, 1400000, '/path/to/lyrics/praisegod.txt', '/path/to/tracks/praisegod.mp3'),
('Jonah', 1, 7, 'Kanye West', 'Kanye West', '00:02:34', false, 1200000, '/path/to/lyrics/jonah.txt', '/path/to/tracks/jonah.mp3'),
('Ok Ok', 1, 8, 'Kanye West', 'Kanye West', '00:04:11', true, 1600000, '/path/to/lyrics/okok.txt', '/path/to/tracks/okok.mp3'),
('Junya', 1, 9, 'Kanye West', 'Kanye West', '00:02:20', true, 1300000, '/path/to/lyrics/junya.txt', '/path/to/tracks/junya.mp3'),
('Believe What I Say', 1, 10, 'Kanye West', 'Kanye West', '00:04:02', true, 1500000, '/path/to/lyrics/believewhatisay.txt', '/path/to/tracks/believewhatisay.mp3'),
('24', 1, 11, 'Kanye West', 'Kanye West', '00:03:17', true, 1400000, '/path/to/lyrics/24.txt', '/path/to/tracks/24.mp3'),
('Remote Control', 1, 12, 'Kanye West', 'Kanye West', '00:04:58', true, 1700000, '/path/to/lyrics/remotecontrol.txt', '/path/to/tracks/remotecontrol.mp3'),
('Moon', 1, 13, 'Kanye West', 'Kanye West', '00:03:22', true, 1600000, '/path/to/lyrics/moon.txt', '/path/to/tracks/moon.mp3'),
('Heaven and Hell', 1, 14, 'Kanye West', 'Kanye West', '00:02:24', true, 1200000, '/path/to/lyrics/heavenandhell.txt', '/path/to/tracks/heavenandhell.mp3'),
('Donda', 1, 15, 'Kanye West', 'Kanye West', '00:02:09', false, 1100000, '/path/to/lyrics/donda.txt', '/path/to/tracks/donda.mp3'),
('Keep My Spirit Alive', 1, 16, 'Kanye West', 'Kanye West', '00:03:57', true, 1800000, '/path/to/lyrics/keepmyspiritalive.txt', '/path/to/tracks/keepmyspiritalive.mp3'),
('Jesus Lord', 1, 17, 'Kanye West', 'Kanye West', '00:09:22', true, 2000000, '/path/to/lyrics/jesuslord.txt', '/path/to/tracks/jesuslord.mp3'),
('New Again', 1, 18, 'Kanye West', 'Kanye West', '00:04:08', true, 1500000, '/path/to/lyrics/newagain.txt', '/path/to/tracks/newagain.mp3'),
('Tell the Vision', 1, 19, 'Kanye West', 'Kanye West', '00:02:00', true, 1200000, '/path/to/lyrics/tellthevision.txt', '/path/to/tracks/tellthevision.mp3'),
('Lord I Need You', 1, 20, 'Kanye West', 'Kanye West', '00:02:45', false, 1300000, '/path/to/lyrics/lordineedyou.txt', '/path/to/tracks/lordineedyou.mp3'),
('Pure Souls', 1, 21, 'Kanye West', 'Kanye West', '00:03:58', true, 1700000, '/path/to/lyrics/puresouls.txt', '/path/to/tracks/puresouls.mp3'),
('Come to Life', 1, 22, 'Kanye West', 'Kanye West', '00:05:07', true, 1900000, '/path/to/lyrics/cometolife.txt', '/path/to/tracks/cometolife.mp3'),
('No Child Left Behind', 1, 23, 'Kanye West', 'Kanye West', '00:02:58', false, 1400000, '/path/to/lyrics/nochildleftbehind.txt', '/path/to/tracks/nochildleftbehind.mp3'),
('Jail Pt. 2', 2, 24, 'Kanye West', 'Kanye West', '00:04:05', true, 1600000, '/path/to/lyrics/jailpt2.txt', '/path/to/tracks/jailpt2.mp3'),
('Ok Ok Pt. 2', 2, 25, 'Kanye West', 'Kanye West', '00:04:08', true, 1500000, '/path/to/lyrics/okokpt2.txt', '/path/to/tracks/okokpt2.mp3'),
('Junya Pt. 2', 2, 26, 'Kanye West', 'Kanye West', '00:02:20', true, 1300000, '/path/to/lyrics/junyaPt2.txt', '/path/to/tracks/junyaPt2.mp3'),
('Jesus Lord Pt. 2', 2, 27, 'Kanye West', 'Kanye West', '00:04:59', true, 1700000, '/path/to/lyrics/jesuslordpt2.txt', '/path/to/tracks/jesuslordpt2.mp3');

INSERT INTO track_album (track_id, album_id)
VALUES 
(11, 2),
(12, 2),
(13, 2),
(14, 2),
(15, 2),
(16, 2),
(17, 2),
(18, 2),
(19, 2),
(20, 2),
(21, 2),
(22, 2),
(23, 2),
(24, 2),
(25, 2),
(26, 2),
(27, 2),
(28, 2),
(29, 2),
(30, 2),
(31, 2),
(32, 2),
(33, 2),
(34, 2),
(35, 2),
(36, 2),
(37, 2);

INSERT INTO artist_track (artist_id, track_id)
VALUES 
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(1, 15),
(1, 16),
(1, 17),
(1, 18),
(1, 19),
(1, 20),
(1, 21),
(1, 22),
(1, 23),
(1, 24),
(1, 25),
(1, 26),
(1, 27),
(1, 28),
(1, 29),
(1, 30),
(1, 31),
(1, 32),
(1, 33),
(1, 34),
(1, 35),
(1, 36),
(1, 37);


-- album_id: 3, 1989
INSERT INTO album (title, disc_type, cover_art, label, release_date, duration)
VALUES ('1989', 'Album', '/path/to/cover/1989_cover.jpg', 'Apollo A-1 LLC', '2014-10-27', '00:48:41');

INSERT INTO album_artist (artist_id, album_id)
VALUES (2, 3);

-- track_id: 38~50
INSERT INTO track (title, disc_number, track_number, writer, producer, duration, is_explicit, plays, lyrics, source_file)
VALUES 
('Welcome to New York', 1, 1, 'Taylor Swift', 'Taylor Swift', '00:03:32', false, 2000000, '/path/to/lyrics/welcome-to-new-york.txt', '/path/to/tracks/welcome-to-new-york.mp3'),
('Blank Space', 1, 2, 'Taylor Swift', 'Max Martin', '00:03:51', false, 2500000, '/path/to/lyrics/blank-space.txt', '/path/to/tracks/blank-space.mp3'),
('Style', 1, 3, 'Taylor Swift', 'Max Martin', '00:03:51', false, 2200000, '/path/to/lyrics/style.txt', '/path/to/tracks/style.mp3'),
('Out of the Woods', 1, 4, 'Taylor Swift', 'Jack Antonoff', '00:03:55', false, 2100000, '/path/to/lyrics/out-of-the-woods.txt', '/path/to/tracks/out-of-the-woods.mp3'),
('All You Had to Do Was Stay', 1, 5, 'Taylor Swift', 'Max Martin', '00:03:13', false, 1800000, '/path/to/lyrics/all-you-had-to-do-was-stay.txt', '/path/to/tracks/all-you-had-to-do-was-stay.mp3'),
('Shake It Off', 1, 6, 'Taylor Swift', 'Max Martin', '00:03:39', false, 3000000, '/path/to/lyrics/shake-it-off.txt', '/path/to/tracks/shake-it-off.mp3'),
('I Wish You Would', 1, 7, 'Taylor Swift', 'Jack Antonoff', '00:03:27', false, 1900000, '/path/to/lyrics/i-wish-you-would.txt', '/path/to/tracks/i-wish-you-would.mp3'),
('Bad Blood', 1, 8, 'Taylor Swift', 'Max Martin', '00:03:31', false, 2800000, '/path/to/lyrics/bad-blood.txt', '/path/to/tracks/bad-blood.mp3'),
('Wildest Dreams', 1, 9, 'Taylor Swift', 'Max Martin', '00:03:40', false, 2400000, '/path/to/lyrics/wildest-dreams.txt', '/path/to/tracks/wildest-dreams.mp3'),
('How You Get the Girl', 1, 10, 'Taylor Swift', 'Max Martin', '00:04:07', false, 2000000, '/path/to/lyrics/how-you-get-the-girl.txt', '/path/to/tracks/how-you-get-the-girl.mp3'),
('This Love', 1, 11, 'Taylor Swift', 'Taylor Swift', '00:04:10', false, 2100000, '/path/to/lyrics/this-love.txt', '/path/to/tracks/this-love.mp3'),
('I Know Places', 1, 12, 'Taylor Swift', 'Ryan Tedder', '00:03:15', false, 1900000, '/path/to/lyrics/i-know-places.txt', '/path/to/tracks/i-know-places.mp3'),
('Clean', 1, 13, 'Taylor Swift', 'Imogen Heap', '00:04:31', false, 2200000, '/path/to/lyrics/clean.txt', '/path/to/tracks/clean.mp3');

INSERT INTO track_album (track_id, album_id)
VALUES 
(38, 3),
(39, 3),
(40, 3),
(41, 3),
(42, 3),
(43, 3),
(44, 3),
(45, 3),
(46, 3),
(47, 3),
(48, 3),
(49, 3),
(50, 3);

INSERT INTO artist_track (artist_id, track_id)
VALUES 
(2, 38),
(2, 39),
(2, 40),
(2, 41),
(2, 42),
(2, 43),
(2, 44),
(2, 45),
(2, 46),
(2, 47),
(2, 48),
(2, 49),
(2, 50);


-- album_id: 4, Lover
INSERT INTO album (title, disc_type, cover_art, label, release_date, duration)
VALUES ('Lover', 'Album', '/path/to/cover/lover_cover.jpg', 'Taylor Swift', '2019-08-23', '01:01:53');

INSERT INTO album_artist (artist_id, album_id)
VALUES (2, 4);

-- track_id: 51~68
INSERT INTO track (title, disc_number, track_number, writer, producer, duration, is_explicit, plays, lyrics, source_file)
VALUES 
('I Forgot That You Existed', 1, 1, 'Taylor Swift', 'Taylor Swift', '00:02:50', false, 2000000, '/path/to/lyrics/i-forgot-that-you-existed.txt', '/path/to/tracks/i-forgot-that-you-existed.mp3'),
('Cruel Summer', 1, 2, 'Taylor Swift', 'Taylor Swift', '00:02:58', false, 2500000, '/path/to/lyrics/cruel-summer.txt', '/path/to/tracks/cruel-summer.mp3'),
('Lover', 1, 3, 'Taylor Swift', 'Taylor Swift', '00:03:41', false, 2200000, '/path/to/lyrics/lover.txt', '/path/to/tracks/lover.mp3'),
('The Man', 1, 4, 'Taylor Swift', 'Taylor Swift', '00:03:10', false, 2100000, '/path/to/lyrics/the-man.txt', '/path/to/tracks/the-man.mp3'),
('The Archer', 1, 5, 'Taylor Swift', 'Taylor Swift', '00:03:31', false, 1800000, '/path/to/lyrics/the-archer.txt', '/path/to/tracks/the-archer.mp3'),
('I Think He Knows', 1, 6, 'Taylor Swift', 'Taylor Swift', '00:02:53', false, 3000000, '/path/to/lyrics/i-think-he-knows.txt', '/path/to/tracks/i-think-he-knows.mp3'),
('Miss Americana & The Heartbreak Prince', 1, 7, 'Taylor Swift', 'Taylor Swift', '00:03:54', false, 1900000, '/path/to/lyrics/miss-americana-and-the-heartbreak-prince.txt', '/path/to/tracks/miss-americana-and-the-heartbreak-prince.mp3'),
('Paper Rings', 1, 8, 'Taylor Swift', 'Taylor Swift', '00:03:42', false, 2800000, '/path/to/lyrics/paper-rings.txt', '/path/to/tracks/paper-rings.mp3'),
('Cornelia Street', 1, 9, 'Taylor Swift', 'Taylor Swift', '00:04:47', false, 2400000, '/path/to/lyrics/cornelia-street.txt', '/path/to/tracks/cornelia-street.mp3'),
('Death by a Thousand Cuts', 1, 10, 'Taylor Swift', 'Taylor Swift', '00:03:18', false, 2000000, '/path/to/lyrics/death-by-a-thousand-cuts.txt', '/path/to/tracks/death-by-a-thousand-cuts.mp3'),
('London Boy', 1, 11, 'Taylor Swift', 'Taylor Swift', '00:03:10', false, 2100000, '/path/to/lyrics/london-boy.txt', '/path/to/tracks/london-boy.mp3'),
('Soon You\'ll Get Better', 1, 12, 'Taylor Swift', 'Taylor Swift', '00:03:21', false, 1900000, '/path/to/lyrics/soon-youll-get-better.txt', '/path/to/tracks/soon-youll-get-better.mp3'),
('False God', 1, 13, 'Taylor Swift', 'Taylor Swift', '00:03:20', false, 2200000, '/path/to/lyrics/false-god.txt', '/path/to/tracks/false-god.mp3'),
('You Need To Calm Down', 1, 14, 'Taylor Swift', 'Taylor Swift', '00:02:51', false, 3000000, '/path/to/lyrics/you-need-to-calm-down.txt', '/path/to/tracks/you-need-to-calm-down.mp3'),
('Afterglow', 1, 15, 'Taylor Swift', 'Taylor Swift', '00:03:43', false, 1900000, '/path/to/lyrics/afterglow.txt', '/path/to/tracks/afterglow.mp3'),
('ME!', 1, 16, 'Taylor Swift', 'Taylor Swift', '00:03:13', false, 2200000, '/path/to/lyrics/me.txt', '/path/to/tracks/me.mp3'),
('It\'s Nice To Have A Friend', 1, 17, 'Taylor Swift', 'Taylor Swift', '00:02:30', false, 1800000, '/path/to/lyrics/its-nice-to-have-a-friend.txt', '/path/to/tracks/its-nice-to-have-a-friend.mp3'),
('Daylight', 1, 18, 'Taylor Swift', 'Taylor Swift', '00:04:53', false, 2300000, '/path/to/lyrics/daylight.txt', '/path/to/tracks/daylight.mp3');

INSERT INTO track_album (track_id, album_id)
VALUES 
(51, 4),
(52, 4),
(53, 4),
(54, 4),
(55, 4),
(56, 4),
(57, 4),
(58, 4),
(59, 4),
(60, 4),
(61, 4),
(62, 4),
(63, 4),
(64, 4),
(65, 4),
(66, 4),
(67, 4),
(68, 4);

INSERT INTO artist_track (artist_id, track_id)
VALUES 
(2, 51),
(2, 52),
(2, 53),
(2, 54),
(2, 55),
(2, 56),
(2, 57),
(2, 58),
(2, 59),
(2, 60),
(2, 61),
(2, 62),
(2, 63),
(2, 64),
(2, 65),
(2, 66),
(2, 67),
(2, 68);


-- album_id: 5, My Voice - The 1st Album (Deluxe Edition)
INSERT INTO album (title, disc_type, cover_art, label, release_date, duration)
VALUES ('My Voice - The 1st Album (Deluxe Edition)', 'Album', '/path/to/cover/my_voice_cover.jpg', 'SM Entertainment', '2017-04-05', '00:55:45');

INSERT INTO album_artist (artist_id, album_id)
VALUES (3, 5);

-- track_id: 69~84
INSERT INTO track (title, disc_number, track_number, writer, producer, duration, is_explicit, plays, lyrics, source_file)
VALUES 
('Make Me Love You', 1, 1, 'Kenzie', 'Kenzie', '00:03:31', false, 2000000, '/path/to/lyrics/make-me-love-you.txt', '/path/to/tracks/make-me-love-you.mp3'),
('Fine', 1, 2, 'Kenzie', 'Kenzie', '00:03:47', false, 2500000, '/path/to/lyrics/fine.txt', '/path/to/tracks/fine.mp3'),
('Cover Up', 1, 3, 'Taeyeon', 'Taeyeon', '00:03:30', false, 2200000, '/path/to/lyrics/cover-up.txt', '/path/to/tracks/cover-up.mp3'),
('Feel So Fine', 1, 4, 'Ylva Dimberg', 'Simon Johansson', '00:03:49', false, 2100000, '/path/to/lyrics/feel-so-fine.txt', '/path/to/tracks/feel-so-fine.mp3'),
('I Got Love', 1, 5, 'Kenzie', 'The Stereotypes', '00:03:09', false, 1800000, '/path/to/lyrics/i-got-love.txt', '/path/to/tracks/i-got-love.mp3'),
('I\'m OK', 1, 6, 'Hyun Ji-won', 'Kenzie', '00:03:26', false, 1700000, '/path/to/lyrics/im-ok.txt', '/path/to/tracks/im-ok.mp3'),
('Time Lapse', 1, 7, 'Kenzie', 'Kenzie', '00:04:41', false, 3000000, '/path/to/lyrics/time-lapse.txt', '/path/to/tracks/time-lapse.mp3'),
('Sweet Love', 1, 8, 'Kenzie', 'Kenzie', '00:03:38', false, 1900000, '/path/to/lyrics/sweet-love.txt', '/path/to/tracks/sweet-love.mp3'),
('When I Was Young', 1, 9, 'Kenzie', 'Kenzie', '00:03:51', false, 2200000, '/path/to/lyrics/when-i-was-young.txt', '/path/to/tracks/when-i-was-young.mp3'),
('I Blame On You', 1, 10, 'Kenzie', 'Kenzie', '00:03:23', false, 2100000, '/path/to/lyrics/i-blame-on-you.txt', '/path/to/tracks/i-blame-on-you.mp3'),
('Lonely Night', 1, 11, 'Kenzie', 'Kenzie', '00:03:43', false, 2400000, '/path/to/lyrics/lonely-night.txt', '/path/to/tracks/lonely-night.mp3'),
('11:11', 1, 12, 'Chelcee Grimes', 'Kenzie', '00:03:43', false, 76000000, '/path/to/lyrics/11-11.txt', '/path/to/tracks/11-11.mp3'),
('Love in Color', 1, 13, 'Kenzie', 'Kenzie', '00:02:57', false, 2000000, '/path/to/lyrics/love-in-color.txt', '/path/to/tracks/love-in-color.mp3'),
('Fire', 1, 14, 'Kenzie', 'The Stereotypes', '00:03:07', false, 2100000, '/path/to/lyrics/fire.txt', '/path/to/tracks/fire.mp3'),
('Eraser', 1, 15, 'Kenzie', 'Kenzie', '00:02:54', false, 1900000, '/path/to/lyrics/eraser.txt', '/path/to/tracks/eraser.mp3'),
('Curtain Call', 1, 16, 'Kenzie', 'Kenzie', '00:03:52', false, 30000000, '/path/to/lyrics/curtain-call.txt', '/path/to/tracks/curtain-call.mp3');

INSERT INTO track_album (track_id, album_id)
VALUES 
(69, 5),
(70, 5),
(71, 5),
(72, 5),
(73, 5),
(74, 5),
(75, 5),
(76, 5),
(77, 5),
(78, 5),
(79, 5),
(80, 5),
(81, 5),
(82, 5),
(83, 5),
(84, 5);

INSERT INTO artist_track (artist_id, track_id)
VALUES 
(3, 69),
(3, 70),
(3, 71),
(3, 72),
(3, 73),
(3, 74),
(3, 75),
(3, 76),
(3, 77),
(3, 78),
(3, 79),
(3, 80),
(3, 81),
(3, 82),
(3, 83),
(3, 84);


-- album_id: 6, Finally
INSERT INTO album (title, disc_type, cover_art, label, release_date, duration)
VALUES ('Finally', 'Album', '/path/to/cover/finally_cover.jpg', 'Dimension Point', '2017-11-08', '4:45:01');

INSERT INTO album_artist (artist_id, album_id)
VALUES (4, 6);

-- Finally disc 1
-- track_id: 85~100
INSERT INTO track (title, disc_number, track_number, writer, producer, duration, is_explicit, plays, lyrics, source_file)
VALUES 
('Mister U.S.A.', 1, 1, 'Komorita Minoru', 'Komorita Minoru', '00:04:29', false, 17104382, '/path/to/lyrics/mister-usa.txt', '/path/to/ta walk in the parkracks/mister-usa.mp3'),
('Aishite Muscat', 1, 2, 'Oikawa Neko', 'Komorita Minoru', '00:04:06', false, 82736102, '/path/to/lyrics/aishite-muscat.txt', '/path/to/tracks/aishite-muscat.mp3'),
('PARADISE TRAIN', 1, 3, 'Keizo Nakanishi', 'Komorita Minoru', '00:04:33', false, 28304122, '/path/to/lyrics/paradise-train.txt', '/path/to/tracks/paradise-train.mp3'),
('TRY ME ~Watashi wo Shinjite~', 1, 4, 'HINOKY TEAM', 'Dave Rodgers', '00:04:01', false, 16249283, '/path/to/lyrics/try-me-watashi-wo-shinjite.txt', '/path/to/tracks/try-me-watashi-wo-shinjite.mp3'),
('Taiyou no Season', 1, 5, 'HINOKY TEAM', 'Dave Rodgers', '00:03:32', false, 27381923, '/path/to/lyrics/taiyou-no-season.txt', '/path/to/tracks/taiyou-no-season.mp3'),
('Body Feels EXIT', 1, 6, 'Tetsuya Komuro', 'Tetsuya Komuro', '00:04:24', false, 15184564, '/path/to/lyrics/body-feels-exit.txt', '/path/to/tracks/body-feels-exit.mp3'),
('Chase the Chance', 1, 7, 'Tetsuya Komuro', 'Tetsuya Komuro', '00:04:32', false, 29184821, '/path/to/lyrics/chase-the-chance.txt', '/path/to/tracks/chase-the-chance.mp3'),
('Don\'t wanna cry', 1, 8, 'Tetsuya Komuro', 'Tetsuya Komuro', '00:05:47', false, 11028941, '/path/to/lyrics/dont-wanna-cry.txt', '/path/to/tracks/dont-wanna-cry.mp3'),
('You\'re my sunshine', 1, 9, 'Tetsuya Komuro', 'Tetsuya Komuro', '00:05:50', false, 39182431, '/path/to/lyrics/you-re-my-sunshine.txt', '/path/to/tracks/you-re-my-sunshine.mp3'),
('SWEET 19 BLUES', 1, 10, 'Tetsuya Komuro', 'Tetsuya Komuro', '00:05:37', false, 29102834, '/path/to/lyrics/sweet-19-blues.txt', '/path/to/tracks/sweet-19-blues.mp3'),
('a walk in the park', 1, 11, 'Tetsuya Komuro', 'Tetsuya Komuro', '00:05:39', false, 62817351, '/path/to/lyrics/a-walk-in-the-park.txt', '/path/to/tracks/a-walk-in-the-park.mp3'),
('CAN YOU CELEBRATE?', 1, 12, 'Tetsuya Komuro', 'Tetsuya Komuro', '00:06:21', false, 74716535, '/path/to/lyrics/can-you-celebrate.txt', '/path/to/tracks/can-you-celebrate.mp3'),
('How to be a Girl', 1, 13, 'Tetsuya Komuro', 'Tetsuya Komuro', '00:04:26', false, 18722301, '/path/to/lyrics/how-to-be-a-girl.txt', '/path/to/tracks/how-to-be-a-girl.mp3'),
('I HAVE NEVER SEEN', 1, 14, 'Tetsuya Komuro', 'Tetsuya Komuro', '00:04:47', false, 78495822, '/path/to/lyrics/i-have-never-seen.txt', '/path/to/tracks/i-have-never-seen.mp3'),
('RESPECT the POWER OF LOVE', 1, 15, 'Tetsuya Komuro', 'Tetsuya Komuro', '00:04:23', false, 45367182, '/path/to/lyrics/respect-the-power-of-love.txt', '/path/to/tracks/respect-the-power-of-love.mp3'),
('NEVER END', 1, 16, 'Tetsuya Komuro', 'Tetsuya Komuro', '00:05:17', false, 67426476, '/path/to/lyrics/never-end.txt', '/path/to/tracks/never-end.mp3');

-- Finally disc 2
-- track_id: 100~118
INSERT INTO track (title, disc_number, track_number, writer, producer, duration, is_explicit, plays, lyrics, source_file)
VALUES
('Say the word', 2, 1, 'Namie Amuro', 'Namie Amuro', '00:03:56', false, 17104382, '/path/to/lyrics/say-the-word.txt', '/path/to/tracks/say-the-word.mp3'),
('I WILL', 2, 2, 'Hiroaki Hayama', 'Hiroaki Hayama', '00:05:35', false, 59832472, '/path/to/lyrics/i-will.txt', '/path/to/tracks/i-will.mp3'),
('SO CRAZY', 2, 3, 'michico', 'Cobra Endo', '00:04:33', false, 12834673, '/path/to/lyrics/so-crazy.txt', '/path/to/tracks/so-crazy.mp3'),
('GIRL TALK', 2, 4, 'michico', 'T.Kura', '00:04:23', false, 12478932, '/path/to/lyrics/girl-talk.txt', '/path/to/tracks/girl-talk.mp3'),
('WANT ME, WANT ME', 2, 5, 'michico', 'SUGI-V', '00:03:12', false, 54373912, '/path/to/lyrics/aishite-muscat.txt', '/path/to/tracks/aishite-muscat.mp3'),
('CAN\'T SLEEP, CAN\'T EAT, I\'M SICK', 2, 6, 'michico', 'T.Kura', '00:03:49', false, 22563010, '/path/to/lyrics/cant-sleep-cant-eat-im-sick.txt', '/path/to/tracks/cant-sleep-cant-eat-im-sick.mp3'),
('Baby Don\'t Cry', 2, 7, 'Nao\'ymt', 'Nao\'ymt', '00:05:22', false, 76124124, '/path/to/lyrics/baby-dont-cry.txt', '/path/to/tracks/baby-dont-cry.mp3'),
('FUNKY TOWN', 2, 8, 'michico', 'T.Kura', '00:03:48', false, 12764128, '/path/to/lyrics/funky-town.txt', '/path/to/tracks/funky-town.mp3'),
('NEW LOOK', 2, 9, 'michico', 'T.Kura', '00:03:57', false, 17237640, '/path/to/lyrics/new-look.txt', '/path/to/tracks/new-look.mp3'),
('ROCK STEADY', 2, 10, 'michico', 'MURO', '00:03:31', false, 22674077, '/path/to/lyrics/rock-steady.txt', '/path/to/tracks/rock-steady.mp3'),
('WHAT A FEELING', 2, 11, 'michico', 'Shinichi Osawa', '00:03:48', false, 12720002, '/path/to/lyrics/what-a-feeling.txt', '/path/to/tracks/what-a-feeling.mp3'),
('Dr.', 2, 12, 'Nao\'ymt', 'Nao\'ymt', '00:05:48', false, 23647513, '/path/to/lyrics/dr.txt', '/path/to/tracks/dr.mp3'),
('Break It', 2, 13, 'Nao\'ymt', 'Nao\'ymt', '00:03:24', false, 11284712, '/path/to/lyrics/break-it.txt', '/path/to/tracks/break-it.mp3'),
('Get Myself Back', 2, 14, 'Nao\'ymt', 'Nao\'ymt', '00:04:35', false, 35671251, '/path/to/lyrics/get-myself-back.txt', '/path/to/tracks/get-myself-back.mp3'),
('Fight Together', 2, 15, 'Nao\'ymt', 'Nao\'ymt', '00:04:20', false, 32648762, '/path/to/lyrics/fight-together.txt', '/path/to/tracks/fight-together.mp3'),
('Tempest', 2, 16, 'Nao\'ymt', 'Nao\'ymt', '00:04:41', false, 78687131, '/path/to/lyrics/tempest.txt', '/path/to/tracks/tempest.mp3'),
('Sit! Stay! Wait! Down!', 2, 17, '', '', '00:03:17', false, 11726481, '/path/to/lyrics/sit-stay-wait-down.txt', '/path/to/tracks/sit-stay-wait-down.mp3'),
('Love Story', 2, 18, '', '', '00:04:42', false, 50928313, '/path/to/lyrics/love-story.txt', '/path/to/tracks/love-story.mp3');

-- Finally disc 3
-- track_id: 117~136
INSERT INTO track (title, disc_number, track_number, writer, producer, duration, is_explicit, plays, lyrics, source_file)
VALUES
('arigatou', 3, 1, 'michico', 'T.Kura', '00:04:11', false, 17104382, '/path/to/lyrics/arigatou.txt', '/path/to/tracks/arigatou.mp3'),
('Damage', 3, 2, 'Nao\'ymt', 'Nao\'ymt', '00:04:50', false, 42832911, '/path/to/lyrics/damage.txt', '/path/to/tracks/damage.mp3'),
('Big Boys Cry', 3, 3, 'Kanata Okajima', 'DSign Music', '00:03:24', false, 19283742, '/path/to/lyrics/big-boys-cry.txt', '/path/to/tracks/big-boys-cry.mp3'),
('Contrail', 3, 4, 'Nao\'ymt', 'Nao\'ymt', '00:04:16', false, 58193221, '/path/to/lyrics/contrail.txt', '/path/to/tracks/contrail.mp3'),
('TSUKI', 3, 5, 'Tiger', 'ZETTON', '00:03:38', false, 29103847, '/path/to/lyrics/tsuki.txt', '/path/to/tracks/tsuki.mp3'),
('Red Carpet', 3, 6, 'Matthew Tishler', 'Matthew Tishler', '00:03:43', false, 27361943, '/path/to/lyrics/red-carpet.txt', '/path/to/tracks/red-carpet.mp3'),
('Mint', 3, 7, 'Maria Marcus', 'Maria Marcus', '00:03:49', false, 29838281, '/path/to/lyrics/mint.txt', '/path/to/tracks/mint.mp3'),
('Hero', 3, 8, 'Imai Ryosuke', 'Imai Ryosuke', '00:05:37', false, 87361232, '/path/to/lyrics/hero.txt', '/path/to/tracks/hero.mp3'),
('Dear Diary', 3, 9, 'Matthew Tishler', 'ats-', '00:03:29', false, 43827162, '/path/to/lyrics/dear-diary.txt', '/path/to/tracks/dear-diary.mp3'),
('Fighter', 3, 10, 'REASON\'', 'REASON\'', '00:03:28', false, 33726384, '/path/to/lyrics/fighter.txt', '/path/to/tracks/fighter.mp3'),
('Christmas Wish', 3, 11, 'Niclas Lundin', 'Niclas Lundin', '00:04:00', false, 21726384, '/path/to/lyrics/christmas-wish.txt', '/path/to/tracks/christmas-wish.mp3'),
('Just You and I', 3, 12, 'MioFRANKY', 'Kiyohito Komatsu', '00:03:38', false, 63718299, '/path/to/lyrics/just-you-and-i.txt', '/path/to/tracks/just-you-and-i.mp3'),
('Hope', 3, 13, 'Kenichi Anraku', 'Kenichi Anraku', '00:04:12', false, 81273621, '/path/to/lyrics/hope.txt', '/path/to/tracks/hope.mp3'),
('In Two', 3, 14, 'Emyli', 'Matthew Tishler', '00:03:57', false, 52293846, '/path/to/lyrics/in-two.txt', '/path/to/tracks/in-two.mp3'),
('How Do You Feel Now?', 3, 15, 'Tetsuya Komuro', 'Tetsuya Komuro', '00:03:50', false, 47281923, '/path/to/lyrics/how-do-you-feel-now.txt', '/path/to/tracks/how-do-you-feel-now.mp3'),
('Showtime', 3, 16, 'MioFRANKY', 'Samuel Waermo', '00:03:06', false, 17294921, '/path/to/lyrics/showtime.txt', '/path/to/tracks/showtime.mp3'),
('Do It For Love', 3, 17, 'SUNNY BOY', 'Jerry Barnes', '00:04:21', false, 65718273, '/path/to/lyrics/do-it-for-love.txt', '/path/to/tracks/do-it-for-love.mp3'),
('Finally', 3, 18, 'Emyli', 'Matthew Tishler', '00:03:39', false, 39212948, '/path/to/lyrics/finally.txt', '/path/to/tracks/finally.mp3');

INSERT INTO track_album (track_id, album_id)
VALUES 
(85, 6),
(86, 6),
(87, 6),
(88, 6),
(89, 6),
(90, 6),
(91, 6),
(92, 6),
(93, 6),
(94, 6),
(95, 6),
(96, 6),
(97, 6),
(98, 6),
(99, 6),
(100, 6),
(101, 6),
(102, 6),
(103, 6),
(104, 6),
(105, 6),
(106, 6),
(107, 6),
(108, 6),
(109, 6),
(110, 6),
(111, 6),
(112, 6),
(113, 6),
(114, 6),
(115, 6),
(116, 6),
(117, 6),
(118, 6),
(119, 6),
(120, 6),
(121, 6),
(122, 6),
(123, 6),
(124, 6),
(125, 6),
(126, 6),
(127, 6),
(128, 6),
(129, 6),
(130, 6),
(131, 6),
(132, 6),
(133, 6),
(134, 6),
(135, 6),
(136, 6);

INSERT INTO artist_track (artist_id, track_id)
VALUES 
(4, 85),
(4, 86),
(4, 87),
(4, 88),
(4, 89),
(4, 90),
(4, 91),
(4, 92),
(4, 93),
(4, 94),
(4, 95),
(4, 96),
(4, 97),
(4, 98),
(4, 99),
(4, 100),
(4, 101),
(4, 102),
(4, 103),
(4, 104),
(4, 105),
(4, 106),
(4, 107),
(4, 108),
(4, 109),
(4, 110),
(4, 111),
(4, 112),
(4, 113),
(4, 114),
(4, 115),
(4, 116),
(4, 117),
(4, 118),
(4, 119),
(4, 120),
(4, 121),
(4, 122),
(4, 123),
(4, 124),
(4, 125),
(4, 126),
(4, 127),
(4, 128),
(4, 129),
(4, 130),
(4, 131),
(4, 132),
(4, 133),
(4, 134),
(4, 135),
(4, 136);
