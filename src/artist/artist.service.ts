import { Tag, dataBase } from '../shared';
import { Artist, ArtistDB, ArtistPreview } from './artist.model';

import { AlbumPreview } from '../album/album.model';

export class ArtistService {
   public static async getAlbumArtist(albumId: string): Promise<Tag> {
      const [{ artist_id, name, profile_photo }] = await dataBase.selectQuery<{
         artist_id: string;
         name: string;
         profile_photo: string;
      }>(
         `SELECT a.artist_id, a.name, a.profile_photo
            FROM artist a
            LEFT JOIN album_artist al_ar
            ON a.artist_id = al_ar.artist_id
            WHERE al_ar.album_id = ?`,
         [albumId],
      );

      return new Tag(name, 'Artist', artist_id, profile_photo);
   }

   public static async getTrackArtists(trackId: string): Promise<Tag[]> {
      const artists = await dataBase.selectQuery<{
         artist_id: string;
         name: string;
      }>(
         `SELECT a.artist_id, a.name
            FROM artist a
            INNER JOIN track_artist t_a
            ON a.artist_id = t_a.artist_id
            WHERE t_a.track_id = ?`,
         [trackId],
      );

      return artists.map(
         artist => new Tag(artist.name, 'Artist', artist.artist_id),
      );
   }

   public static async getInfo(albumId: string): Promise<ArtistDB> {
      const [info] = await dataBase.selectQuery<ArtistDB>(
         `SELECT *
            FROM artist
            WHERE artist_id = ?`,
         [albumId],
      );
      return info;
   }

   // TODO: Implement this method
   public static async getArtist(artistId: string): Promise<Artist> {
      console.log(artistId);
      return {} as Artist;
   }

   public static async getPreview(artistId: string): Promise<ArtistPreview> {
      const artist = await ArtistService.getInfo(artistId);

      return new ArtistPreview(artist);
   }

   public static async getPreviews(
      artistIds: string[],
   ): Promise<ArtistPreview[]> {
      const dbArtists = await dataBase.selectQuery<ArtistDB>(
         `SELECT *
            FROM artist
            WHERE artist_id IN (?)`,
         [artistIds],
      );

      return dbArtists.map(dbArtist => new ArtistPreview(dbArtist));
   }

   // TODO: Implement this method
   public static async getDiscography(
      artistId: string,
   ): Promise<AlbumPreview[]> {
      console.log(artistId);
      return [];
   }

   // TODO: Implement this method
   public static async getPlaylists(artistId: string) {
      return `get Playlists of Artist ${artistId}`;
   }
}
