import { Tag } from '../shared';

export interface TrackDB {
   track_id: string;
   album_id: string;
   title: string;
   disc_number: number;
   track_number: number;
   duration: string;
   is_explicit: boolean;
   plays: number;
   lyrics: string;
   source_file: string;
}

export class Track {
   trackId: string;
   title: string;
   discNumber: number;
   trackNumber: number;
   albumTag?: Tag;
   artists: Tag[];
   duration: string;
   isExplicit: boolean;
   plays: number;
   lyrics: string;
   sourceFile: string;

   constructor(track: TrackDB, artists: Tag[], album?: Tag) {
      this.trackId = track.track_id;
      this.title = track.title;
      this.discNumber = track.disc_number;
      this.trackNumber = track.track_number;
      this.duration = track.duration;
      this.isExplicit = track.is_explicit;
      this.plays = track.plays;
      this.lyrics = track.lyrics;
      this.sourceFile = track.source_file;

      this.artists = artists;

      this.albumTag = album;
   }
}
