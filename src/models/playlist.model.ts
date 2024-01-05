import { Model } from './model';
import { CamelizeKeys } from '../utilities';

type PlaylistDB = {
   playlist_id: string;
   title: string;
   cover_art: string;
   created_by: string;
};

export type Playlist = CamelizeKeys<PlaylistDB>;
