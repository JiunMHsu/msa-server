# Music Streaming App Server

## Descripción

El presente proyecto consiste en la construcción de una API para plataformas de streaming de música. Está desarrollado junto con un cliente: [msa-client](https://github.com/JiunMHsu/msa-client).

## TODO

- [ ] Diseñar e implementar las respuestas para Artist, Track, Playlist y User
- [ ] Implementar los métodos faltantes (create, update y delete) para todas las entidades

## Para tener en cuenta

- [ ] Lectura del `DATE` en MySQL, ahora se esta manejando por string, pero despues del SELECT agrega otra info que no habia insertado (creo q es el timezone)

## Endpoints y Methods

- Album

  - `GET /album/:albumId`
  - `GET /album/preview/albumId`
  - `POST /album/create/:artist_id`
  - `DELETE /album/delete/:album_id`

<!-- - Artista

  - `GET /artists/:artistId`
  - `GET /artist/preview/:artist_id`
  - `GET /artist/discography/:artist_id`
  - `GET /artist/playlists/:artist_id`

- Playlist

  - `GET /playlist/:playlist_id`
  - `GET /playlist/tracks/:playlist_id`
  - `POST /playlist/create/:user_id`
  - `PATCH /playlist/update/title/:playlist_id`
  - `PATCH /playlist/update/cover/:playlist_id`
  - `PATCH /playlist/add-track/:playlist_id/:track_id`
  - `PATCH /playlist/remove-track/:playlist_id/:track_id`
  - `DELETE /playlist/delete/:playlist_id`

- Track

  - `GET /track/:track_id`
  - `GET /track/credits/:track_id`
  - `GET /track/lyrics/:track_id`

- User

  - `GET /user/:user_id`
  - `POST /user/create`
  - `PUT /user/update/:user_id`
  - `DELETE /user/delete/:user_id`
  - `GET /user/authenticate`

- Media

  - `GET /play/:track_id`
  - `GET /image/:image_name` -->

## Esquemas
