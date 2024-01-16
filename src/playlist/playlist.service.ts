import { dataBase } from '../shared/service/database';
import { Playlist, PlaylistDB } from './playlist.model';

export class PlaylistService {
   // private static async getInfo(albumId: string): Promise<PlaylistDB> {}

   public static async getPlaylist(playlistId: string) {
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
}
