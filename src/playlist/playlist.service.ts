import { dataBase } from '../shared/service/database';
import { Playlist, PlaylistDB, PlaylistPreview } from './playlist.model';

import { TrackService } from '../track/track.service';
import { UserService } from '../user/user.service';

export class PlaylistService {
   private static async getInfo(playlistId: string): Promise<PlaylistDB> {
      const results = await dataBase.selectQuery<PlaylistDB>(
         `SELECT *
         FROM playlist
         WHERE playlist_id = ?`,
         [playlistId],
      );
      return results[0];
   }

   public static async getPlaylist(playlistId: string) {
      const dbPlaylist = await PlaylistService.getInfo(playlistId);
      const tracks = await TrackService.getPlaylistTracks(playlistId);
      const owner = await UserService.getPlaylistOwner(playlistId);

      return new Playlist(dbPlaylist, owner, tracks);
   }

   public static async getPreview(playlistId: string) {
      const dbPlaylist = await PlaylistService.getInfo(playlistId);
      const owner = await UserService.getPlaylistOwner(playlistId);

      return new PlaylistPreview(dbPlaylist, owner);
   }
}
