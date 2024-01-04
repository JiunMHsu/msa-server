import { BaseRouter } from './router';
import { AlbumController } from '../controllers';

export class AlbumRouter extends BaseRouter<AlbumController> {
   constructor() {
      super(AlbumController);
   }

   override routes(): void {
      // this.router.get('/album/:album_id', (req, res) => {
      //    this.controller.getAlbum(req, res);
      // });
      // this.router.post('/album/create/:artist_id', (req, res) => {
      //    this.controller.createAlbum(req, res);
      // });
      // this.router.delete('/album/delete/:artist_id', (req, res) => {
      //    this.controller.deleteAlbum(req, res);
      // });
   }
}
