import { dataBase } from '../../shared/service/database';
import { Album, AlbumDB } from '../models/album.model';

export class AlbumService {
   public static async getById(albumId: string) {
      return `get album by id ${albumId}`;

      // const results = await dataBase.selectQuery<AlbumDB>(
      //    `SELECT *
      //    FROM album
      //    WHERE album_id = ?`,
      //    [albumId],
      // );
      // return results;
   }

   public static async getByArtist(artistId: string) {
      return `get all albums from artist ${artistId}`;

      // const results = await dataBase.selectQuery<AlbumDB>(
      //    `SELECT *
      //    FROM album
      //    WHERE artist_id = ?`,
      //    [artistId],
      // );
      // return results;
   }
}
