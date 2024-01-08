import { CamelizeKeys } from '../../shared/utilities';

export type ArtistDB = {
   artist_id: string;
   artist_name: string;
   verified: boolean;
   followers: number;
   monthly_listeners: number;
   profile_photo: string;
};

export type Artist = CamelizeKeys<ArtistDB>;
