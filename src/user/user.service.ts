import * as bcrypt from 'bcrypt';

import { Tag, dataBase } from '../shared';
import { User, UserDB, UserLibrary, UserPreview } from './user.model';
import { AlbumService } from '../album/album.service';
import { AlbumPreview } from '../album/album.model';
import { ArtistService } from '../artist/artist.service';
import { ArtistPreview } from '../artist/artist.model';
import { Track } from '../track/track.model';
import { TrackService } from '../track/track.service';
import { PlaylistPreview } from '../playlist/playlist.model';
import { PlaylistService } from '../playlist/playlist.service';

export class UserService {
   public static async getPlaylistOwner(playlistId: string): Promise<Tag> {
      const [{ user_id, name, profile_photo }] = await dataBase.selectQuery<{
         user_id: string;
         name: string;
         profile_photo: string;
      }>(
         `SELECT user_id, name, profile_photo
         FROM user
         WHERE user_id = (
            SELECT user_id
            FROM playlist
            WHERE playlist_id = ?
         )`,
         [playlistId],
      );

      return new Tag(name, 'user', user_id, profile_photo);
   }

   private static async getInfo(userId: string): Promise<UserDB> {
      const [info] = await dataBase.selectQuery<UserDB>(
         `SELECT *
         FROM user
         WHERE user_id = ?`,
         [userId],
      );
      return info;
   }

   public static async getUser(userId: string): Promise<User> {
      const info = await UserService.getInfo(userId);
      const library = await UserService.getLibrary(userId);
      return new User(info, library);
   }

   public static async getPreview(userId: string): Promise<UserPreview> {
      const user = await UserService.getInfo(userId);
      return new UserPreview(user);
   }

   // TODO: implementar
   // igual no deberia ir aca el detProfile completo,
   // sino que en el controller, aca simplemente le doy
   // partes del perfil
   public static async getProfile(userId: string) {
      return `get User Profile ${userId}`;
   }

   public static async getLibrary(userId: string): Promise<UserLibrary> {
      const savedAlbums = await UserService.getSavedAlbums(userId);
      const savedPlaylists = await UserService.getSavedPlaylists(userId);
      const followedArtists = await UserService.getFollowedArtists(userId);
      const likedTracks = (await UserService.getLikedTracks(userId)).map(
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

   /**
    * Recieves user credentials and resolves to the user id
    *
    * @exception User not found. message: provided email does not match any user
    * @exception Password incorrect. message: provided password does not match the user's email
    *
    * @param email
    * @param password
    * @returns requested user id
    */
   public static async resolveToId(
      email: string,
      password: string,
   ): Promise<string> {
      try {
         const [dbUser] = await dataBase.selectQuery<UserDB>(
            `SELECT *
            FROM user
            WHERE email = ?`,
            [email],
         );

         if (!dbUser) throw new Error('User not found');

         const isPasswordCorrect = await bcrypt.compare(
            password,
            dbUser.password,
         );

         if (!isPasswordCorrect) throw new Error('Password incorrect');

         return dbUser.user_id;
      } catch (error) {
         throw error;
      }
   }

   /**
    * Recieves user data and creates a new user by
    * generating a new user id, hashing the password
    * and storing the user data in the database.
    *
    * @param email
    * @param password
    * @param name
    * @returns created user id
    */
   public static async createUser(
      email: string,
      password: string,
      name: string,
   ): Promise<string> {
      try {
         const userId = crypto.randomUUID();
         const hashedPassword = await bcrypt.hash(password, 10);
         const profilePhoto = 'userDefault.png';

         await dataBase.insertQuery(
            `INSERT INTO user (user_id, name, email, password, profile_photo)
            VALUES (?, ?, ?, ?, ?)`,
            [userId, name, email, hashedPassword, profilePhoto],
         );

         return userId;
      } catch (error) {
         throw error;
      }
   }

   // TODO: implementar
   public static async updateUser(userId: string, user: any) {
      return `update User ${userId} with ${user}`;
   }

   // TODO: implementar
   public static async deleteUser(userId: string) {
      return `delete User ${userId}`;
   }
}
