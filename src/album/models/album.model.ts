import { CamelizeKeys } from '../../shared/utilities';

export type DiskType = 'Album' | 'EP' | 'Single' | 'Mixtape';

export type AlbumDB = {
   album_id: string;
   title: string;
   disc_type: string;
   cover_art: string;
   label: string;
   release_date: string;
   duration: string;
};

export type Album = CamelizeKeys<AlbumDB>;
