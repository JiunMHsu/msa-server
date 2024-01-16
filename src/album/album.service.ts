import { dataBase } from '../shared/service/database';
import { Album, AlbumDB, AlbumPreview, AlbumTag } from './album.model';
import { ArtistService } from '../artist/artist.service';
import { TrackService } from '../track/track.service';

export class AlbumService {
   public static async getTrackAlbum(trackId: string): Promise<AlbumTag> {
      const results = await dataBase.selectQuery<{
         album_id: string;
         title: string;
         cover_art: string;
      }>(
         `SELECT album.album_id, album.title, album.cover_art
         FROM album
         INNER JOIN track ON album.album_id = track.album_id
         WHERE track.track_id = ?`,
         [trackId],
      );

      return {
         albumId: results[0].album_id,
         title: results[0].title,
         coverArt: results[0].cover_art,
      } as AlbumTag;
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
      const tracks = await TrackService.getAlbumTracks(albumId);
      const artist = await ArtistService.getAlbumArtist(albumId);

      return new Album(artist, dbAlbum, tracks);
   }

   public static async getPreview(albumId: string): Promise<AlbumPreview> {
      const dbAlbum = await AlbumService.getInfo(albumId);
      const artist = await ArtistService.getAlbumArtist(albumId);

      return new AlbumPreview(artist, dbAlbum);
   }
}
