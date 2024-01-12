import { CamelizeKeys } from '../shared/utilities';

type UserDB = {
   user_id: string;
   name: string;
   email: string;
   password: string;
   profilePhoto: string;
};

export type User = CamelizeKeys<UserDB>;
