import { AlbumPreview } from '../album/album.model';

export interface ArtistDB {
   artist_id: string;
   artist_name: string;
   verified: boolean;
   followers: number;
   monthly_listeners: number;
   profile_photo: string;
}

export interface ArtistTag {
   artistId: string;
   name: string;
}

export interface Discography {
   popular: AlbumPreview[];
   singles: AlbumPreview[];
   extendedPlays: AlbumPreview[];
   albums: AlbumPreview[];
   compilations: AlbumPreview[];
}

export class Artist {
   artistId: string = '';
   name: string = '';
   verified: boolean = false;
   followers: number = 0;
   monthlyListeners: number = 0;
   profilePhoto: string = '';
   discography: Discography = {
      popular: [],
      singles: [],
      extendedPlays: [],
      albums: [],
      compilations: [],
   };

   constructor(artistDB?: ArtistDB, discography?: Discography) {
      if (artistDB) {
         this.artistId = artistDB.artist_id;
         this.name = artistDB.artist_name;
         this.verified = artistDB.verified;
         this.followers = artistDB.followers;
         this.monthlyListeners = artistDB.monthly_listeners;
         this.profilePhoto = artistDB.profile_photo;
      }
      if (discography) {
         this.discography = discography;
      }
   }
}

export class ArtistPreview {
   artistId: string = '';
   name: string = '';
   profilePhoto: string = '';

   constructor(artistDB?: ArtistDB) {
      if (artistDB) {
         this.artistId = artistDB.artist_id;
         this.name = artistDB.artist_name;
         this.profilePhoto = artistDB.profile_photo;
      }
   }
}
