# Music Streaming App Server

## Descripción

El presente proyecto consiste en la construcción de una API para plataformas de streaming de música. Está desarrollado junto con un cliente: [msa-client](https://github.com/JiunMHsu/msa-client).

## TODO

- [x] Configurar Variables de entorno, diferiendo desarrollo y producción.
- [X] Rediseñar la respuesta de `album`, debería contener los tracks (?

## Para tener en cuenta

- [ ] Lectura del `DATE` en MySQL, ahora se esta manejando por string, pero despues del SELECT agrega otra info que no habia insertado (creo q es el timezone)

## Endpoints y Methods

- Album

  - `GET /album/:albumId`
  - `GET /album/full/albumId`

  - `GET /album/discography/:artistId`
  - `POST /album/create/:artist_id`
  - `DELETE /album/delete/:album_id`

- Artista

  - `GET /artists/`
  - `GET /artist/:artist_id`
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

```JSON
GET /album/:albumId

{
  "albumId": "",
  "title": "",
  "artists": {
    "artistId": "",
    "name": ""
  },
  "discType": "",
  "coverArt": ""
}
```

```JSON
GET /album/full/albumId

{
  "albumId": "",
  "title": "",
  "artists": {
    "artistId": "",
    "name": ""
  },
  "discType": "",
  "coverArt": "url/to/image",
  "label": "",
  "releaseDate": "00-00-00",
  "duration": "00:00:00",
  "discs": [
    [
      {
        "trackId": "",
        "title": "",
        "trackNumber": 0,
        "artists": [
          {
            "artistId": "",
            "name": ""
          },
          // ...other artists
        ],
        "duration": "",
        "isExplicit": false,
        "plays": 0,
        "lyrics": "",
        "sourceFile": ""
      },
      // ... other tracks
    ],
    // ... other discs
  ]
},

```
