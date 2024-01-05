import { CamelizeKeys } from '../utilities';
import { Model } from './model';

type UserDB = {
   user_id: string;
   name: string;
   email: string;
   password: string;
   profilePhoto: string;
};

export type User = CamelizeKeys<UserDB>;

export class UserModel extends Model<UserDB, User> {}
