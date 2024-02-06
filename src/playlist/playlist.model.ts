import { Preview, Tag } from '../shared';
import { Track } from '../track/track.model';

export interface PlaylistDB {
   playlist_id: string;
   title: string;
   description: string;
   cover_art: string;
   created_by: string;
   is_public: boolean;
}

export class Playlist {
   playlistId: string;
   title: string;
   coverArt: string;
   owner: Tag;
   isPublic: boolean;
   tracks: Track[];

   constructor(dbPlaylist: PlaylistDB, owner: Tag, tracks: Track[]) {
      this.playlistId = dbPlaylist.playlist_id;
      this.title = dbPlaylist.title;
      this.coverArt = dbPlaylist.cover_art;
      this.isPublic = dbPlaylist.is_public;

      this.owner = owner;

      this.tracks = tracks;
   }
}

export class PlaylistPreview extends Preview {
   constructor(
      { playlist_id, title, description, cover_art }: PlaylistDB,
      owner: Tag,
   ) {
      super(playlist_id, title, cover_art, 'playlist', owner, description);
   }
}