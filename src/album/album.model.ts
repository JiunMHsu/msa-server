import { Preview, Tag } from '../shared';
import { Track } from '../track/track.model';

export type DiskType = 'Album' | 'EP' | 'Single' | 'Mixtape';

export interface AlbumDB {
   album_id: string;
   title: string;
   disc_type: DiskType;
   cover_art: string;
   discs: number;
   label: string;
   release_date: string;
   duration: string;
}

export class Album {
   albumId: string;
   title: string;
   artist: Tag;
   discType: DiskType;
   coverArt: string;
   label: string;
   releaseDate: string;
   duration: string;
   discs: Track[][];

   constructor(dbAlbum: AlbumDB, artist: Tag, tracks: Track[][]) {
      this.albumId = dbAlbum.album_id;
      this.title = dbAlbum.title;
      this.discType = dbAlbum.disc_type as DiskType;
      this.coverArt = dbAlbum.cover_art;
      this.label = dbAlbum.label;
      this.releaseDate = dbAlbum.release_date;
      this.duration = dbAlbum.duration;

      this.artist = artist;

      this.discs = tracks;
   }
}

export class AlbumPreview extends Preview {
   constructor({ album_id, title, cover_art }: AlbumDB, artist: Tag) {
      super(album_id, title, cover_art, 'album', artist);
   }
}
