export interface UserDB {
   user_id: string;
   name: string;
   email: string;
   password: string;
   profilePhoto: string;
}

export interface UserTag {
   userId: string;
   name: string;
   profilePhoto?: string;
}

export class User {}

export class UserPreview {
   userId: string = '';
   name: string = '';
   profilePhoto: string = '';

   constructor(dbUser?: UserDB) {
      if (dbUser) {
         this.userId = dbUser.user_id;
         this.name = dbUser.name;
         this.profilePhoto = dbUser.profilePhoto;
      }
   }
}
