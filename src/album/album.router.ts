import { BaseRouter } from '../shared/router/router';
import { AlbumController } from './controllers/album.controller';
import { AlbumMiddleware } from './middlewares/album.middleware';

export class AlbumRouter extends BaseRouter<AlbumController, AlbumMiddleware> {
   constructor() {
      super(AlbumController, AlbumMiddleware);
   }

   public routes(): void {
      this.router.get('/album', (req, res) => {
         this.controller.getAll(req, res);
      });

      this.router.get('/album/:albumId', (req, res) => {
         this.controller.getAlbum(req, res);
      });

      this.router.get('/album/discography/:artistId', (req, res) => {
         this.controller.getByArtist(req, res);
      });

      this.router.post(
         '/album/create/:artistId',
         (req, res, next) => [this.middleware.validateAlbum(req, res, next)],
         (req, res) => {
            this.controller.createAlbum(req, res);
         },
      );

      // this.router.delete('/album/delete/:albumId', (req, res) => {
      //    this.controller.deleteAlbum(req, res);
      // });
   }
}
