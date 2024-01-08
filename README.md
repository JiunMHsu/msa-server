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

- [ ] Lectura del `DATE` en MySQL, ahora se esta manejando por string, pero despues del SELECT agrega otra info que no habia insertado (creo q es el timezone)
- [ ] Refactorizar la lógica de track.controller, la busqueda a la base de datos se debe extraer al modelo.
- [ ] Revisar tema conversión de tipos, (adaptar las variables de la DB a interfaces con camel case).
- [ ] Ver bien tema `modelos` en esta arquitectura, creo q se esta manejando mal.

## Endpoints y Methods

- Artista

  <!-- - `GET /artists/` -->
  - `GET /artist/:artist_id`
  - `GET /artist/discography/:artist_id`
  - `GET /artist/playlists/:artist_id`

- Disco

  - `GET /album/:album_id`
  - `GET /album/tracks/:album_id`
  - `POST /album/create/:artist_id`
  - `DELETE /album/delete/:album_id`

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
  - `GET /image/:image_name`

## Esquemas

### Albums

| Clave       | Tipo         | Descripción                                            |
| ----------- | ------------ | ------------------------------------------------------ |
| albumId     | string       | Identificador del disco                                |
| title       | string       | Título del disco                                       |
| discType    | string       | Tipo del disco, puede ser: Album, EP, Single o Mixtape |
| coverArt    | string (url) | Url de la portada (imagen) en esta misma API           |
| label       | string       | Nombre del sello discográfico                          |
| releaseDate | string       | Fecha de publicación, formato: AA-MM-DD                |
| duration    | string       | Duración total del disco, formato: HH-MM-SS            |
