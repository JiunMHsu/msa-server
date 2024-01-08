import { dataBase } from '../../shared/service/database';
import { Album, AlbumDB } from '../models/album.model';

export class AlbumService {
   public static async getAll(): Promise<Album[]> {
      const results =
         await dataBase.selectQuery<AlbumDB>(`SELECT * FROM album`);
      return AlbumDB.toAlbums(results);
   }

   public static async getById(albumId: string): Promise<Album> {
      const results = await dataBase.selectQuery<AlbumDB>(
         `SELECT *
         FROM album
         WHERE album_id = ?`,
         [albumId],
      );
      return AlbumDB.toAlbum(results[0]);
   }

   public static async getByArtist(artistId: string): Promise<Album[]> {
      const results = await dataBase.selectQuery<AlbumDB>(
         `SELECT *
         FROM album al left join album_artist aa on al.album_id = aa.album_id
         WHERE artist_id = ?`,
         [artistId],
      );
      return AlbumDB.toAlbums(results);
   }

   // public static async createAlbum(
   //    artistId: string,
   //    albumName: string,
   //    albumGenre: string,
   //    albumYear: number,
   //    albumCover: string,
   // ): Promise<void> {
   //    await dataBase.insertQuery(
   //       `INSERT INTO album (album_name, album_genre, album_year, album_cover)
   //       VALUES (?, ?, ?, ?)`,
   //       [albumName, albumGenre, albumYear, albumCover],
   //    );

   //    const results = await dataBase.selectQuery<AlbumDB>(
   //       `SELECT album_id
   //       FROM album
   //       WHERE album_name = ?`,
   //       [albumName],
   //    );

   //    await dataBase.insertQuery(
   //       `INSERT INTO album_artist (album_id, artist_id)
   //       VALUES (?, ?)`,
   //       [results[0].album_id, artistId],
   //    );
   // }
}
