import { AlbumDB } from '../album/album.model';
import { dataBase } from '../shared/service/database';
import { Artist, ArtistDB } from './artist.model';

export class ArtistService {
   public static async getAll() {
      return 'get all Artist';
   }

   public static async getById(artistId: string) {
      return `get Artist ${artistId}`;
   }

   public static async getDiscography(artistId: string) {
      // const results = await dataBase.selectQuery<AlbumDB>(
      //    `SELECT *
      //    FROM album al left join album_artist aa on al.album_id = aa.album_id
      //    WHERE artist_id = ?`,
      //    [artistId],
      // );

      return `get Discography of ${artistId}`;
   }

   public static async getPlaylists(artistId: string) {
      return `get Playlists of Artist ${artistId}`;
   }
}

// public async getById(artistId: string): Promise<Artist> {
//    const [results] = await this.dataBase.selectQuery<ArtistDB>(
//       `SELECT * FROM artist WHERE artist_id = ?`,
//       [artistId],
//    );
//    return this.adapter.adaptToModel(results, this.emptyArtist);
// }

// public async getAll(): Promise<Artist[]> {
//    const results = await this.dataBase.selectQuery<ArtistDB>(
//       `SELECT * FROM artist`,
//       [],
//    );
//    return this.adapter.adaptListToModel(results, this.emptyArtist);
// }

// // hace falta que sea async?
// // !! Revisar
// public async create(artist: Artist): Promise<void> {
//    const artistDB = this.adapter.adaptToDB(artist, this.emptyDBArtist);
//    await this.dataBase.insertQuery('artist', [artistDB]);
// }
