# Music Streaming App Server

## Descripción

El presente proyecto consiste en la construcción de una API para plataformas de streaming de música. Está desarrollado junto con un cliente: [msa-client](https://github.com/JiunMHsu/msa-client).

## TODO

- Generales:

  - [x] Configurar Variables de entorno, diferiendo desarrollo y producción.

- Rutas y Endpoints:

  - [X] Definir los endpoints.
  - [ ] Implementar las Rutas.

- Modelos y Base de Datos:

  - [ ] Diseñar las Tablas y sus relaciones (la DB).
  - [ ] Implementar los modelos y la interacción con la base de datos. (Ver si meter ORM)

- Streaming de Audio:

  - [ ]
  - [ ] Stremear los archivos de audio

## Endpoints y Methods

- Artista

  - `GET /artist/:artist_id`
  - `GET /artist/:artist_id/discography`
  - `GET /artist/:artist_id/playlists`

- Disco

  - `GET /album/:album_id`
  - `POST /album/create/:artist_id`
  - `DELETE /album/delete/:artist_id`

- Playlist

  - `GET /playlist/:playlist_id`
  - `POST /playlist/create/:user_id`
  - `PUT /playlist/modify/title/:playlist_id`
  - `PUT /playlist/modify/cover/:playlist_id`
  - `POST /playlist/modify/:playlist_id/:track_id`
  - `DELETE /playlist/modify/:playlist_id/:track_id`
  - `DELETE /playlist/delete/:playlist_id`

- Track

  - `GET /track/:track_id/credits`
  - `GET /track/:track_id/play`
  - `GET /track/:track_id/lyrics`

- User

  - `GET /user/:user_id`
  - `POST /user/create/:user_id`
  - `PUT /user/update/:user_id`
  - `DELETE /user/delete/:user_id`

## Esquemas
