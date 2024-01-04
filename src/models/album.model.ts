import { CamelizeKeys } from "../utilities";

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

type Album = CamelizeKeys<AlbumDB>;

export class AlbumModel {}
