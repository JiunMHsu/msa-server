# Music Streaming App Server

## Descripción

El presente proyecto consiste en una API para una plataforma de streaming de música. Deberá poder servir información sobre:

* Piezas Musicales.
* Artistas.
* Usuarios. (con albums guardados, playlists creados, temas favoritos).

## TODO

* [X] Configurar Variables de entorno, diferiendo desarrollo y produccion
* [ ] Routers (Implementar los Endpoints): album, artista, track, user(opcional, este involucraria muchas mas cosas como playlists y favoritos)
* [ ] Diseñar la Base de Datos (DER) y definir las consultas.
* [ ] Establecer modelos y la interaccion con la base de datos
* [ ] Stremear los archivos de audio

## Endpoints

### Artista

* `GET /artist/:artist_id`
* `GET /artist/:artist_id/discography`

### Disco

* `GET /album/:album_id`

### Playlist

* `GET /playlist/:playlist_id`

### Track

* `GET /track/:track_id/credits`
* `GET /track/:track_id/play`
* `GET /track/:track_id/lyrics`

### User

## Esquemas
