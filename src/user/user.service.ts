import { Tag, dataBase } from '../shared';

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

   public static async getUser(userId: string) {
      return `get User ${userId}`;
   }

   public static async getPreview(userId: string) {
      return `get User Preview ${userId}`;
   }

   public static async getProfile(userId: string) {
      return `get User Profile ${userId}`;
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
