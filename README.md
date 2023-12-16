# Music Streaming App Server

## Descripción

El presente proyecto consiste en una API para una plataforma de streaming de música. Deberá poder servir información sobre:

* Piezas Musicales.
* Artistas.
* Usuarios. (con albums guardados, playlists creados, temas favoritos).

## TODO

* [ ] Configurar Variables de entorno, diferiendo desarrollo y produccion
* [ ] Routers: album, artista, track, user(opcional, este involucraria muchas mas cosas como playlists y favoritos)
* [ ] Establecer modelos y la interaccion con la base de datos (por el momento archivos json)
* [ ] Streamear los archivos de audio

## Endpoints

### Artista

* `GET /artist/:id`
* `GET /artist/discography/:id`

### Disco

* `GET /album/:id`

### Playlist

* `GET /playlist/:id`

### Track

* `GET /track/:id/credits`
* `GET /play/track/:id`

## Esquemas
