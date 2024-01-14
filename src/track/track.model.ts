import { AlbumTag } from '../album/album.model';
import { ArtistTag } from '../artist/artist.model';

export interface TrackDB {
   track_id: string;
   album_id: string;
   title: string;
   disc_number: number;
   track_number: number;
   duration: string; // o string
   is_explicit: boolean;
   plays: number;
   lyrics: string;
   source_file: string;
}

export class Track {
   trackId: string = '';
   title: string = '';
   discNumber: number = 0;
   trackNumber: number = 0;
   albumTag?: AlbumTag;
   artists: ArtistTag[] = [];
   duration: string = '';
   isExplicit: boolean = false;
   plays: number = 0;
   lyrics: string = '';
   sourceFile: string = '';

   constructor(track?: TrackDB, artists?: ArtistTag[], album?: AlbumTag) {
      if (track) {
         this.trackId = track.track_id;
         this.title = track.title;
         this.discNumber = track.disc_number;
         this.trackNumber = track.track_number;
         this.duration = track.duration;
         this.isExplicit = track.is_explicit;
         this.plays = track.plays;
         this.lyrics = track.lyrics;
         this.sourceFile = track.source_file;
      }
      if (album) {
         this.albumTag = album;
      }
      if (artists) {
         this.artists = artists;
      }
   }
}
