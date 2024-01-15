import { BaseRouter } from '../shared/router/router';
import { TrackController } from './track.cotroller';
import { TrackMiddleware } from './track.middleware';

export class TrackRouter extends BaseRouter<TrackController, TrackMiddleware> {
   constructor() {
      super(TrackController, TrackMiddleware);
   }

   public routes(): void {
      this.router.get('/track/:trackId', (req, res) => {
         this.controller.getTrack(req, res);
      });

      this.router.get('/track/album/:albumId', (req, res) => {
         this.controller.getByAlbum(req, res);
      });

      this.router.get('/track/playlist/:playlistId', (req, res) => {
         this.controller.getByPlaylist(req, res);
      });

      this.router.get('/track/credits/:trackId', (req, res) => {
         this.controller.getCredits(req, res);
      });

      this.router.get('/track/lyrics/:trackId', (req, res) => {
         this.controller.getLyrics(req, res);
      });
   }
}
