import { ArtistTag } from '../artist/artist.model';
import { dataBase } from '../shared/service/database';
import { Track, TrackDB } from './track.model';

export class TrackService {
   private static async getTrackArtists(trackId: string): Promise<ArtistTag[]> {
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

   public static async getById(trackId: string) {
      return `get track by id ${trackId}`;
   }

   public static async getByAlbum(albumId: string): Promise<Track[][]> {
      const dbTracks = await dataBase.selectQuery<TrackDB>(
         `SELECT *
            FROM track
            WHERE album_id = ?`,
         [albumId],
      );

      const numberOfDiscs =
         Math.max(...dbTracks.map(track => track.disc_number)) || 1;

      const discs: Track[][] = [];
      for (let i = 0; i < numberOfDiscs; i++) discs.push([]);

      for (const dbTrack of dbTracks) {
         const artists = await TrackService.getTrackArtists(dbTrack.track_id);
         const newTrack = new Track(dbTrack, artists);

         const discNumber = newTrack.discNumber;

         if (discNumber) {
            discs[discNumber - 1].push(newTrack);
         } else {
            discs[0].push(newTrack);
         }
      }

      return discs;
   }

   public static async getCredits(trackId: string) {
      return `get credits from track ${trackId}`;
   }

   public static async getLyrics(trackId: string) {
      return `get lyrics from track ${trackId}`;
   }
}
