import { BaseRouter } from '../shared/router/router';
import { PlaylistController } from './playlist.controller';
import { PlaylistMiddleware } from './playlist.middleware';

export class PlaylistRouter extends BaseRouter<
   PlaylistController,
   PlaylistMiddleware
> {
   constructor() {
      super(PlaylistController, PlaylistMiddleware);
   }

   public routes(): void {
      this.router.get('/playlist/:playlistId', (req, res) => {
         this.controller.getPlaylist(req, res);
      });

      this.router.get('/playlist/preview/:playlistId', (req, res) => {
         this.controller.getPlaylistPreview(req, res);
      });
   }
}
