import { Track } from '../track/track.model';
import { UserTag } from '../user/user.model';

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
   owner: UserTag;
   isPublic: boolean;
   tracks: Track[];

   constructor(dbPlaylist: PlaylistDB, owner: UserTag, tracks: Track[]) {
      this.playlistId = dbPlaylist.playlist_id;
      this.title = dbPlaylist.title;
      this.coverArt = dbPlaylist.cover_art;
      this.isPublic = dbPlaylist.is_public;

      this.owner = owner;

      this.tracks = tracks;
   }
}

export class PlaylistPreview {
   playlistId: string;
   title: string;
   owner: UserTag;
   coverArt: string;

   constructor(dbPlaylist: PlaylistDB, owner: UserTag) {
      this.playlistId = dbPlaylist.playlist_id;
      this.title = dbPlaylist.title;
      this.coverArt = dbPlaylist.cover_art;

      this.owner = owner;
   }
}
