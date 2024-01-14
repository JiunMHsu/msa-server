import { AlbumService } from '../album/album.service';
import { ArtistService } from '../artist/artist.service';
import { dataBase } from '../shared/service/database';
import { Track, TrackDB } from './track.model';

export class TrackService {
   public static async getById(trackId: string): Promise<Track> {
      const dbTrack = await dataBase.selectQuery<TrackDB>(
         `SELECT *
            FROM track
            WHERE track_id = ?`,
         [trackId],
      );

      return new Track(
         dbTrack[0],
         await ArtistService.getTrackArtists(trackId),
         await AlbumService.getTrackAlbum(trackId),
      );
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
         const album = await AlbumService.getTrackAlbum(dbTrack.track_id);
         const artists = await ArtistService.getTrackArtists(dbTrack.track_id);
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
