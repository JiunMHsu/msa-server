import { AlbumPreview } from '../album/album.model';
import { ArtistPreview } from '../artist/artist.model';
import { PlaylistPreview } from '../playlist/playlist.model';

import { Preview, Tag } from '../shared';

export interface UserDB {
   user_id: string;
   name: string;
   email: string;
   password: string;
   profile_photo: string;
}

export class User {
   userId: string;
   name: string;
   email: string;
   profilePhoto: string;
   library: UserLibrary;

   constructor(dbUser: UserDB, library: UserLibrary) {
      this.userId = dbUser.user_id;
      this.name = dbUser.name;
      this.email = dbUser.email;
      this.profilePhoto = dbUser.profile_photo;

      this.library = library;
   }
}

export class UserLibrary {
   constructor(
      public readonly savedAlbums: AlbumPreview[],
      public readonly savedPlaylists: PlaylistPreview[],
      public readonly followedArtists: ArtistPreview[],
      public readonly likedTracks: string[],
   ) {}
}

export class UserPreview extends Preview {
   constructor(user: UserDB) {
      super(user.user_id, user.name, user.profile_photo, 'Profile');
   }
}
