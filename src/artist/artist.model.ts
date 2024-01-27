import { AlbumPreview } from '../album/album.model';
import { Preview, Tag } from '../shared';

export interface ArtistDB {
   artist_id: string;
   name: string;
   verified: boolean;
   followers: number;
   monthly_listeners: number;
   profile_photo: string;
}

export interface Discography {
   popular: AlbumPreview[];
   singles: AlbumPreview[];
   extendedPlays: AlbumPreview[];
   albums: AlbumPreview[];
   compilations: AlbumPreview[];
}

export class Artist {
   artistId: string;
   name: string;
   verified: boolean;
   followers: number;
   monthlyListeners: number;
   profilePhoto: string;
   discography: Discography;

   constructor(dbArtist: ArtistDB, discography: Discography) {
      this.artistId = dbArtist.artist_id;
      this.name = dbArtist.name;
      this.verified = dbArtist.verified;
      this.followers = dbArtist.followers;
      this.monthlyListeners = dbArtist.monthly_listeners;
      this.profilePhoto = dbArtist.profile_photo;

      this.discography = discography;
   }
}

export class ArtistPreview extends Preview {
   constructor(dbArtist: ArtistDB) {
      super(
         dbArtist.artist_id,
         dbArtist.name,
         dbArtist.profile_photo,
         'Artist',
      );
   }
}
