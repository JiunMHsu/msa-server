import { BaseRouter } from '../shared/router/router';
import { PlaylistController } from './controllers/playlist.controller';
import { PlaylistMiddleware } from './middlewares/playlist.middleware';

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

      this.router.get('/playlist/tracks/:playlistId', (req, res) => {
         this.controller.getPlaylistTracks(req, res);
      });

      this.router.post('/playlist/create/:userId', (req, res) => {
         this.controller.createPlaylist(req, res);
      });

      this.router.patch('/playlist/update/title/:playlistId', (req, res) => {
         this.controller.updateTitle(req, res);
      });

      this.router.patch('/playlist/update/cover/:playlistId', (req, res) => {
         this.controller.updateCover(req, res);
      });

      this.router.patch(
         '/playlist/add-track/:playlistId/:trackId',
         (req, res) => {
            this.controller.addTrack(req, res);
         },
      );

      this.router.patch(
         '/playlist/remove-track/:playlistId/:trackId',
         (req, res) => {
            this.controller.removeTrack(req, res);
         },
      );

      this.router.delete('/playlist/delete/:playlistId', (req, res) => {
         this.controller.deletePlaylist(req, res);
      });
   }
}
