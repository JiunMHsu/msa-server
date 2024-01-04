import { Track } from './';

export type DiskType = 'Album' | 'EP' | 'Single' | 'Mixtape';

type AlbumDB = {
   album_id: string;
   title: string;
   disc_type: string;
   cover_art: string;
   label: string;
   release_date: string;
   duration: string;
};

export class AlbumModel {}
