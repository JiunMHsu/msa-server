import { dataBase } from '../shared/repository/database';
import { Album, AlbumDB, AlbumPreview } from './album.model';

import { ArtistService } from '../artist/artist.service';
import { TrackService } from '../track/track.service';
import { Tag } from '../shared';

export class AlbumService {
   public static async getTrackAlbum(trackId: string): Promise<Tag> {
      const [{ album_id, title, cover_art }] = await dataBase.selectQuery<{
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

      return new Tag(album_id, title, 'album', cover_art);
   }

   private static async getInfo(albumId: string): Promise<AlbumDB> {
      const [info] = await dataBase.selectQuery<AlbumDB>(
         `SELECT *
         FROM album
         WHERE album_id = ?`,
         [albumId],
      );

      return info;
   }

   public static async getAlbum(albumId: string): Promise<Album> {
      const dbAlbum = await AlbumService.getInfo(albumId);
      const tracks = await TrackService.getAlbumTracks(albumId);
      const artist = await ArtistService.getAlbumArtist(albumId);

      return new Album(dbAlbum, artist, tracks);
   }

   public static async getPreview(albumId: string): Promise<AlbumPreview> {
      const dbAlbum = await AlbumService.getInfo(albumId);
      const artist = await ArtistService.getAlbumArtist(albumId);

      return new AlbumPreview(dbAlbum, artist);
   }

   public static async getPreviews(
      albumIds: string[],
   ): Promise<AlbumPreview[]> {
      const dbAlbums = await dataBase.selectQuery<AlbumDB>(
         `SELECT *
         FROM album
         WHERE album_id IN (?)`,
         [albumIds],
      );

      const previews = dbAlbums.map(async dbAlbum => {
         const artist = await ArtistService.getAlbumArtist(dbAlbum.album_id);
         return new AlbumPreview(dbAlbum, artist);
      });

      return Promise.all(previews);
   }
}
