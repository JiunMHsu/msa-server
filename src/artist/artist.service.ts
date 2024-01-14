import { dataBase } from '../shared';
import { ArtistTag } from './artist.model';

export class ArtistService {
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

   public static async getTrackArtists(trackId: string): Promise<ArtistTag[]> {
      const artists = await dataBase.selectQuery<{
         artist_id: string;
         artist_name: string;
      }>(
         `SELECT artist.artist_id, artist_name
            FROM artist
            INNER JOIN track_artist
            ON artist.artist_id = track_artist.artist_id
            WHERE track_artist.track_id = ?`,
         [trackId],
      );

      return artists.map(artist => ({
         artistId: artist.artist_id,
         name: artist.artist_name,
      }));
   }

   public static async getById(artistId: string) {
      return `get Artist ${artistId}`;
   }

   public static async getDiscography(artistId: string) {
      return `get Discography of ${artistId}`;
   }

   public static async getPlaylists(artistId: string) {
      return `get Playlists of Artist ${artistId}`;
   }
}
