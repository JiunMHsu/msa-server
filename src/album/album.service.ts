import { ArtistService } from '../artist/artist.service';
import { dataBase } from '../shared/service/database';
import { TrackService } from '../track/track.service';
import { Album, AlbumDB, AlbumPreview, AlbumTag } from './album.model';

export class AlbumService {
   public static async getTrackAlbum(trackId: string): Promise<AlbumTag> {
      const results = await dataBase.selectQuery<AlbumTag>(
         `SELECT album.album_id, album.title
         FROM album
         INNER JOIN track ON album.album_id = track.album_id
         WHERE track.track_id = ?`,
         [trackId],
      );
      return results[0];
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
      const artist = await ArtistService.getAlbumArtist(albumId);

      return new Album(artist, dbAlbum, tracks);
   }

   public static async getAlbumPreview(albumId: string): Promise<AlbumPreview> {
      const dbAlbum = await AlbumService.getInfo(albumId);
      const artist = await ArtistService.getAlbumArtist(albumId);

      return new AlbumPreview(artist, dbAlbum);
   }
}
