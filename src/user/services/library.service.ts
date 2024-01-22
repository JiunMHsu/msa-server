import { dataBase } from '../../shared';
import { UserLibrary } from '../user.model';

import { AlbumPreview } from '../../album/album.model';
import { AlbumService } from '../../album/album.service';
import { ArtistPreview } from '../../artist/artist.model';
import { ArtistService } from '../../artist/artist.service';
import { PlaylistPreview } from '../../playlist/playlist.model';
import { PlaylistService } from '../../playlist/playlist.service';
import { Track } from '../../track/track.model';
import { TrackService } from '../../track/track.service';

export class LibraryService {
   public static async getLibrary(userId: string): Promise<UserLibrary> {
      const savedAlbums = await LibraryService.getSavedAlbums(userId);
      const savedPlaylists = await LibraryService.getSavedPlaylists(userId);
      const followedArtists = await LibraryService.getFollowedArtists(userId);
      const likedTracks = (await LibraryService.getLikedTracks(userId)).map(
         track => track.trackId,
      );

      return new UserLibrary(
         savedAlbums,
         savedPlaylists,
         followedArtists,
         likedTracks,
      );
   }

   public static async getSavedAlbums(userId: string): Promise<AlbumPreview[]> {
      const dbIds = await dataBase.selectQuery<{
         album_id: string;
      }>(
         `SELECT album_id
         FROM user_album
         WHERE user_id = ?`,
         [userId],
      );

      return dbIds.length
         ? AlbumService.getPreviews(dbIds.map(({ album_id }) => album_id))
         : [];
   }

   public static async getSavedPlaylists(
      userId: string,
   ): Promise<PlaylistPreview[]> {
      const dbIds = await dataBase.selectQuery<{
         playlist_id: string;
      }>(
         `SELECT playlist_id
         FROM user_playlist
         WHERE user_id = ?`,
         [userId],
      );

      return dbIds.length
         ? PlaylistService.getPreviews(
              dbIds.map(({ playlist_id }) => playlist_id),
           )
         : [];
   }

   public static async getFollowedArtists(
      userId: string,
   ): Promise<ArtistPreview[]> {
      const dbIds = await dataBase.selectQuery<{
         artist_id: string;
      }>(
         `SELECT artist_id
         FROM user_artist
         WHERE user_id = ?`,
         [userId],
      );

      return dbIds.length
         ? ArtistService.getPreviews(dbIds.map(({ artist_id }) => artist_id))
         : [];
   }

   public static async getLikedTracks(userId: string): Promise<Track[]> {
      const dbIds = await dataBase.selectQuery<{
         track_id: string;
      }>(
         `SELECT track_id
         FROM user_track
         WHERE user_id = ?`,
         [userId],
      );

      return dbIds.length
         ? TrackService.getTracks(dbIds.map(({ track_id }) => track_id))
         : [];
   }
}
