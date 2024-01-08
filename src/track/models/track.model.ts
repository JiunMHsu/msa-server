import { CamelizeKeys } from '../../shared/utilities';

export type TrackDB = {
   track_id: string;
   album_id: string;
   title: string;
   disc_number: number;
   track_number: number;
   duration: string; // o string
   is_explicit: boolean;
   plays: number;
   source_file: string;
};

export type Track = CamelizeKeys<TrackDB>;
