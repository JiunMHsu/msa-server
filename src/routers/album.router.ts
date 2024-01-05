import { BaseRouter } from './router';
import { AlbumController } from '../controllers';

export class AlbumRouter extends BaseRouter<AlbumController> {
   constructor() {
      super(AlbumController);
   }

   override routes(): void {
      this.router.get('/album/:album_id', (req, res) => {
         this.controller.getAlbum(req, res);
      });
   }
}
