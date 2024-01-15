import { dataBase } from '../shared/service/database';
import { Playlist, PlaylistDB } from './playlist.model';

export class PlaylistService {
   public static async getById(playlistId: string) {
      return `get Playlist ${playlistId}`;

      // const query = `
      //    SELECT *
      //    FROM playlist
      //    WHERE created_by = $1
      // `;
      // const params = [artistId];

      // const { rows } = await this.query(query, params);
      // return [];
   }

   public static async getPreview(playlistId: string) {
      return `get Preview of Playlist ${playlistId}`;

      // const query = `
      //    SELECT *
      //    FROM playlist
      //    WHERE created_by = $1
      // `;
      // const params = [artistId];

      // const { rows } = await this.query(query, params);
      // return [];
   }

   public static async getTracks(playlistId: string) {
      return `get Tracks of Playlist ${playlistId}`;

      // const query = `
      //    SELECT *
      //    FROM playlist
      //    WHERE created_by = $1
      // `;
      // const params = [artistId];

      // const { rows } = await this.query(query, params);
      // return [];
   }

   public static async create(userId: string) {
      return `create Playlist of ${userId}`;

      // const query = `
      //    INSERT INTO playlist (title, cover_art, created_by)
      //    VALUES ($1, $2, $3)
      // `;
      // const params = [playlist.title, playlist.coverArt, artistId];
      // await this.query(query, params);
   }

   public static async updateTitle(playlistId: string, newTitle: string) {
      return `update Title of ${playlistId} to ${newTitle}`;

      // const query = `
      //    UPDATE playlist
      //    SET title = $1
      //    WHERE playlist_id = $2
      // `;
      // const params = [newTitle, playlistId];
      // await this.query(query, params);
   }

   public static async updateCover(playlistId: string, newCover: string) {
      return `update Cover of ${playlistId} to ${newCover}`;

      // const query = `
      //    UPDATE playlist
      //    SET cover_art = $1
      //    WHERE playlist_id = $2
      // `;
      // const params = [newCover, playlistId];
      // await this.query(query, params);
   }

   public static async addTrack(playlistId: string, trackId: string) {
      return `add Track ${trackId} to Playlist ${playlistId}`;

      // const query = `
      //    INSERT INTO playlist_track (playlist_id, track_id)
      //    VALUES ($1, $2)
      // `;
      // const params = [playlistId, trackId];
      // await this.query(query, params);
   }

   public static async removeTrack(playlistId: string, trackId: string) {
      return `remove Track ${trackId} from Playlist ${playlistId}`;

      // const query = `
      //    DELETE FROM playlist_track
      //    WHERE playlist_id = $1
      //    AND track_id = $2
      // `;
      // const params = [playlistId, trackId];
      // await this.query(query, params);
   }

   public static async delete(playlistId: string) {
      console.log(playlistId);

      // const query = `
      //    DELETE FROM playlist
      //    WHERE playlist_id = $1
      // `;
      // const params = [playlistId];
      // await this.query(query, params);
   }
}
