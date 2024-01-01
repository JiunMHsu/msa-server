export interface User {
   userID: string; //
   name: string;
   email: string;
   profilePhoto: string; // blob?
   following: string[]; // artists id
   playlists: string[];
   savedAlbums: string[];
}

interface DbUser {
   artist_id: string;
   name: string;
   email: string;
   password: string; //
   profilePhoto: string; // blob?
}
