import { dataBase } from '../shared';
import { User, UserTag, UserDB } from './user.model';

export class UserService {
   public static async getPlaylistOwner(playlistId: string): Promise<UserTag> {
      const results = await dataBase.selectQuery<{
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

      return {
         userId: results[0].user_id,
         name: results[0].name,
         profilePhoto: results[0].profile_photo,
      } as UserTag;
   }

   public static async getById(userId: string) {
      return `get User ${userId}`;
   }

   public static async createUser(user: any) {
      return `create User ${user}`;
   }

   public static async resolveToId(userEmail: string, userPassword: string) {
      console.log({ userEmail, userPassword });
      return `80b98b16-94da-4246-9996-6e74e9fff286`;
   }

   public static async getLibrary(userId: string) {
      console.log(userId);
   }

   public static async updateUser(userId: string, user: any) {
      return `update User ${userId} with ${user}`;
   }

   public static async deleteUser(userId: string) {
      return `delete User ${userId}`;
   }
}
