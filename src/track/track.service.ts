import { dataBase } from '../shared/service/database';
import { Track, TrackDB } from './track.model';

export class TrackService {
   public static async getById(trackId: string) {
      return `get track by id ${trackId}`;
   }

   public static async getByAlbum(albumId: string) {
      return `get all tracks from album ${albumId}`;
   }

   public static async getCredits(trackId: string) {
      return `get credits from track ${trackId}`;
   }

   public static async getLyrics(trackId: string) {
      return `get lyrics from track ${trackId}`;
   }
}
