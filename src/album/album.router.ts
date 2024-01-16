import { BaseRouter } from '../shared/router/router';
import { AlbumController } from './album.controller';
import { AlbumMiddleware } from './album.middleware';

export class AlbumRouter extends BaseRouter<AlbumController, AlbumMiddleware> {
   constructor() {
      super(AlbumController, AlbumMiddleware);
   }

   public routes(): void {
      this.router.get('/album/:albumId', (req, res) => {
         this.controller.getAlbum(req, res);
      });

      this.router.get('/album/preview/:albumId', (req, res) => {
         this.controller.getAlbumPreview(req, res);
      });

      // this.router.post('/album/:userId', (req, res) => {});
   }
}
