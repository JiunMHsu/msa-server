// import { dataBase } from '../../shared/service/database';
// import { User, UserDB } from '../models/user.model';

export class UserService {
   public static async getUser(userId: string) {
      return `get User ${userId}`;

      // const results = await dataBase.selectQuery<UserDB>(
      //    `SELECT *
      //    FROM user
      //    WHERE user_id = ?`,
      //    [userId],
      // );
      // return results;
   }

   public static async createUser(user: any) {
      return `create User ${user}`;

      // const results = await dataBase.selectQuery<UserDB>(
      //    `SELECT *
      //    FROM user
      //    WHERE user_id = ?`,
      //    [userId],
      // );
      // return results;
   }

   public static async resolveToId(userEmail: string, userPassword: string) {
      console.log({ userEmail, userPassword });
      return `80b98b16-94da-4246-9996-6e74e9fff286`;

      // const results = await dataBase.selectQuery<UserDB>(
      //    `SELECT *
      //    FROM user
      //    WHERE user_id = ?`,
      //    [userId],
      // );
      // return results;
   }

   public static async updateUser(userId: string, user: any) {
      return `update User ${userId} with ${user}`;

      // const results = await dataBase.selectQuery<UserDB>(
      //    `SELECT *
      //    FROM user
      //    WHERE user_id = ?`,
      //    [userId],
      // );
      // return results;
   }

   public static async deleteUser(userId: string) {
      return `delete User ${userId}`;

      // const results = await dataBase.selectQuery<UserDB>(
      //    `SELECT *
      //    FROM user
      //    WHERE user_id = ?`,
      //    [userId],
      // );
      // return results;
   }
}
