import { ArtistTag } from '../artist/artist.model';
import { dataBase } from '../shared/service/database';
import { TrackService } from '../track/track.service';
import { Album, AlbumDB, AlbumPreview } from './album.model';

export class AlbumService {
   public static async getAlbumArtist(albumId: string): Promise<ArtistTag> {
      const results = await dataBase.selectQuery<{
         artist_id: string;
         artist_name: string;
         profile_photo: string;
      }>(
         `SELECT a.artist_id, a.artist_name, a.profile_photo 
            FROM artist a
            LEFT JOIN album_artist al_ar
            ON a.artist_id = al_ar.artist_id
            WHERE al_ar.album_id = ?`,
         [albumId],
      );

      return {
         artistId: results[0].artist_id,
         name: results[0].artist_name,
         profilePhoto: results[0].profile_photo,
      } as ArtistTag;
   }

   private static async getInfo(albumId: string): Promise<AlbumDB> {
      const results = await dataBase.selectQuery<AlbumDB>(
         `SELECT *
         FROM album
         WHERE album_id = ?`,
         [albumId],
      );
      return results[0];
   }

   public static async getAlbum(albumId: string): Promise<Album> {
      const dbAlbum = await AlbumService.getInfo(albumId);
      const tracks = await TrackService.getByAlbum(albumId);
      const artist = await AlbumService.getAlbumArtist(albumId);

      return new Album(artist, dbAlbum, tracks);
   }

   public static async getAlbumPreview(albumId: string): Promise<AlbumPreview> {
      const dbAlbum = await AlbumService.getInfo(albumId);
      const artist = await AlbumService.getAlbumArtist(albumId);

      return new AlbumPreview(artist, dbAlbum);
   }
}
