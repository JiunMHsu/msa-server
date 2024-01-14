import { CamelizeKeys } from '../shared/utilities';

export interface TrackDB {
   track_id: string;
   album_id: string;
   title: string;
   disc_number: number;
   track_number: number;
   duration: string; // o string
   is_explicit: boolean;
   plays: number;
   source_file: string;
}

export class Track {
   trackId: string ='';
   title: string = '';
   trackNumber: number = 0;
   artists: [
      {
         artistId: '';
         name: '';
      },
      // ...other artists
   ];
   duration: '';
   isExplicit: false;
   plays: 0;
   lyrics: '';
   sourceFile: '';
}
