import { Track } from "./";

export type DiskType = 'Album' | 'EP' | 'Single' | 'Mixtape';

export interface Album {
   albumId: string;
   discType: DiskType;
   title: string;
   coverArt: string;
   artists: string[]; // id
   tracks: Track[];
   label: string;
   release: Date; // XX-XX-XX
   duration: Date; // miliseconds
}
