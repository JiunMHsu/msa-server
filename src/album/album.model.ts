import { ArtistTag } from '../artist/artist.model';
import { Track } from '../track/track.model';

export type DiskType = 'Album' | 'EP' | 'Single' | 'Mixtape' | 'Compilation';

export interface AlbumDB {
   album_id: string;
   title: string;
   disc_type: DiskType;
   cover_art: string;
   discs: number;
   label: string;
   release_date: string;
   duration: string;
}

export interface AlbumTag {
   albumId: string;
   title: string;
   coverArt?: string;
}

export class Album {
   albumId: string = '';
   title: string = '';
   artist: ArtistTag = { artistId: '', name: '' };
   discType: DiskType | '' = '';
   coverArt: string = '';
   label: string = '';
   releaseDate: string = '';
   duration: string = '';
   discs: Track[][] = [];

   constructor(artist?: ArtistTag, albumDB?: AlbumDB, tracks?: Track[][]) {
      if (albumDB) {
         this.albumId = albumDB.album_id;
         this.title = albumDB.title;
         this.discType = albumDB.disc_type as DiskType;
         this.coverArt = albumDB.cover_art;
         this.label = albumDB.label;
         this.releaseDate = albumDB.release_date;
         this.duration = albumDB.duration;
      }
      if (artist) {
         this.artist = artist;
      }
      if (tracks) {
         this.discs = tracks;
      }
   }
}

export class AlbumPreview {
   albumId: string = '';
   title: string = '';
   artist: ArtistTag = { artistId: '', name: '' };
   discType: DiskType | '' = '';
   coverArt: string = '';

   constructor(artist?: ArtistTag, albumDB?: AlbumDB) {
      if (albumDB) {
         this.albumId = albumDB.album_id;
         this.title = albumDB.title;
         this.discType = albumDB.disc_type as DiskType;
         this.coverArt = albumDB.cover_art;
      }
      if (artist) {
         this.artist = artist;
      }
   }
}
