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

  - [X] Diseñar las Tablas y sus relaciones (la DB).
  - [ ] Implementar los modelos y la interacción con la base de datos. (Ver si meter ORM)

- Streaming de Audio:

  - [X] Stremear los archivos de audio

## Para tener en cuenta

Ahora se esta usando los tipos de la DB como principal y, el modelo de la app adaptado según la DB, debería ser al revés, ejemplo:

  ```typescript
  export type Artist = {
    artistId: string;
    artistName: string;
    verified: boolean;
    followers: number;
    monthlyListeners: number;
    profilePhoto: string;
  }

  type ArtistDB = CamelizeKeys<Artist>;
  ```

De esta forma, el `type T = CamelizeKeys<U>` puede ser interno del Model genérico y prescindir de repetirlo para todos los modelos.

- [ ] Refactorizar la lógica de track.controller, la busqueda a la base de datos se debe extraer al modelo.
- [ ] Revisar tema conversión de tipos, (adaptar las variables de la DB a interfaces con camel case).
- [ ] Ver bien tema `modelos` en esta arquitectura, creo q se esta manejando mal.

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
  - `GET /track/:track_id/lyrics`

- User

  - `GET /user/:user_id`
  - `POST /user/create/:user_id`
  - `PUT /user/update/:user_id`
  - `DELETE /user/delete/:user_id`

- Playable

  - `GET /play/track/:track_id`
  - `GET /play/artist/:artist_id`
  - `GET /play/album/:album_id`
  - `GET /play/playlist/:playlist_id`

## Esquemas
