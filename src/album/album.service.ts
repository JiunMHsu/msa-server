import { dataBase } from '../shared/service/database';
import { Track, TrackDB } from '../track/track.model';
import { Album, AlbumDB, AlbumPreview } from './album.model';

export class AlbumService {
   private static async getInfo(albumId: string): Promise<AlbumDB> {
      const results = await dataBase.selectQuery<AlbumDB>(
         `SELECT *
         FROM album
         WHERE album_id = ?`,
         [albumId],
      );
      return results[0];
   }

   private static async getTracks(albumId: string): Promise<TrackDB[]> {}

   public static async getAlbum(albumId: string): Promise<Album> {
      const info = await AlbumService.getInfo(albumId);
      const tracks = await AlbumService.getTracks(albumId);
      const discs: Track[][] = [];
      return new Album();
   }

   public static async getPreview(albumId: string): Promise<AlbumPreview[]> {}

   public static async getByArtist(artistId: string): Promise<Album[]> {}

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
