import { dataBase } from '../shared/repository/database';
import { Track, TrackDB } from './track.model';

import { AlbumService } from '../album/album.service';
import { ArtistService } from '../artist/artist.service';

export class TrackService {
   private static async dbToTrack(dbTracks: TrackDB[]): Promise<Track[]> {
      const tracks = dbTracks.map(async dbTrack => {
         const album = await AlbumService.getTrackAlbum(dbTrack.track_id);
         const artists = await ArtistService.getTrackArtists(dbTrack.track_id);
         return new Track(dbTrack, artists, album);
      });

      return Promise.all(tracks);
   }

   public static async getTrack(trackId: string): Promise<Track> {
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

   public static async getTracks(trackIds: string[]): Promise<Track[]> {
      const dbTracks = await dataBase.selectQuery<TrackDB>(
         `SELECT *
            FROM track
            WHERE track_id IN (?)`,
         [trackIds],
      );

      return TrackService.dbToTrack(dbTracks);
   }

   /**
    * Recibe un id de album y retorna los tracks del album en un array de arrays,
    * siendo cada subarray un disco.
    *
    * para el caso de un album que tiene un solo disco, el array sera simple (unidimensional).
    */
   public static async getAlbumTracks(albumId: string): Promise<Track[][]> {
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

   // Ver si refactorizar en uno general (recibe un array de ids y retorna un array de tracks)
   public static async getPlaylistTracks(playlistId: string): Promise<Track[]> {
      const dbTracks = await dataBase.selectQuery<TrackDB>(
         `SELECT t.*
            FROM track t
            LEFT JOIN playlist_track p_t
            ON t.track_id = p_t.track_id
            WHERE p_t.playlist_id = ?`,
         [playlistId],
      );

      return TrackService.dbToTrack(dbTracks);
   }

   // Ver si refactorizar en uno general (recibe un array de ids y retorna un array de tracks)
   // public static async getUserLiked(userId: string): Promise<Track[]> {
   //    const dbTracks = await dataBase.selectQuery<TrackDB>(
   //       `SELECT t.*
   //          FROM track t
   //          LEFT JOIN user_track u_t
   //          ON t.track_id = u_t.track_id
   //          WHERE u_t.user_id = ?`,
   //       [userId],
   //    );

   //    return TrackService.dbToTrack(dbTracks);
   // }

   // public static async getCredits(trackId: string) {
   //    return `get credits from track ${trackId}`;
   // }

   // public static async getLyrics(trackId: string) {
   //    return `get lyrics from track ${trackId}`;
   // }
}
