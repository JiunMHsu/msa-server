import { dataBase } from '../shared/repository/database';
import { Playlist, PlaylistDB, PlaylistPreview } from './playlist.model';

import { TrackService } from '../track/track.service';
import { UserService } from '../user/services/user.service';

export class PlaylistService {
   private static async getInfo(playlistId: string): Promise<PlaylistDB> {
      const [playlist] = await dataBase.selectQuery<PlaylistDB>(
         `SELECT *
         FROM playlist
         WHERE playlist_id = ?`,
         [playlistId],
      );
      return playlist;
   }

   public static async getPlaylist(playlistId: string): Promise<Playlist> {
      const dbPlaylist = await PlaylistService.getInfo(playlistId);
      const tracks = await TrackService.getPlaylistTracks(playlistId);
      const owner = await UserService.getPlaylistOwner(playlistId);

      return new Playlist(dbPlaylist, owner, tracks);
   }

   public static async getPreview(
      playlistId: string,
   ): Promise<PlaylistPreview> {
      const dbPlaylist = await PlaylistService.getInfo(playlistId);
      const owner = await UserService.getPlaylistOwner(playlistId);

      return new PlaylistPreview(dbPlaylist, owner);
   }

   public static async getPreviews(
      playlistIds: string[],
   ): Promise<PlaylistPreview[]> {
      const dbPlaylists = await dataBase.selectQuery<PlaylistDB>(
         `SELECT *
         FROM playlist
         WHERE playlist_id IN (?)`,
         [playlistIds],
      );

      const previews = dbPlaylists.map(
         async dbPlaylist =>
            new PlaylistPreview(
               dbPlaylist,
               await UserService.getPlaylistOwner(dbPlaylist.playlist_id),
            ),
      );

      return Promise.all(previews);
   }
}
