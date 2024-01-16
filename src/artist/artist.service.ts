import { dataBase } from '../shared';
import { Artist, ArtistPreview, ArtistTag } from './artist.model';
import { AlbumPreview } from '../album/album.model';

export class ArtistService {
   public static async getAlbumArtist(albumId: string): Promise<ArtistTag> {
      const results = await dataBase.selectQuery<{
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

      return {
         artistId: results[0].artist_id,
         name: results[0].name,
         profilePhoto: results[0].profile_photo,
      } as ArtistTag;
   }

   public static async getTrackArtists(trackId: string): Promise<ArtistTag[]> {
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

      return artists.map(artist => ({
         artistId: artist.artist_id,
         name: artist.name,
      }));
   }

   public static async getArtist(artistId: string): Promise<Artist> {
      console.log(artistId);
      return {} as Artist;
   }

   public static async getPreview(artistId: string): Promise<ArtistPreview> {
      const results = await dataBase.selectQuery<{
         artist_id: string;
         name: string;
         profile_photo: string;
      }>(
         `SELECT artist_id, name, profile_photo
            FROM artist
            WHERE artist_id = ?`,
         [artistId],
      );

      return {
         artistId: results[0].artist_id,
         name: results[0].name,
         profilePhoto: results[0].profile_photo,
      } as ArtistPreview;
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
