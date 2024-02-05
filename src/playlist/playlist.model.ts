import { Preview, Tag } from '../shared';
import { Track } from '../track/track.model';

export interface PlaylistDB {
   playlist_id: string;
   title: string;
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

// export class PlaylistPreview extends Preview {
//    constructor(dbPlaylist: PlaylistDB, owner: Tag) {
//       super(
//          dbPlaylist.playlist_id,
//          dbPlaylist.title,
//          dbPlaylist.cover_art,
//          'Playlist',
//          owner,
//       );
//    }
// }
