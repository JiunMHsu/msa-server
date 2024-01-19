import { Preview, Tag } from '../shared';

export interface UserDB {
   user_id: string;
   name: string;
   email: string;
   password: string;
   profile_photo: string;
}

export class User {}

export class UserPreview extends Preview {
   constructor(user: UserDB) {
      super(
         user.user_id,
         user.name,
         new Tag('Profile', 'user'),
         user.profile_photo,
         'user',
      );
   }
}
