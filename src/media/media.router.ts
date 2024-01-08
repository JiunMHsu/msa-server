import { BaseRouter } from '../shared/router/router';
import { MediaController } from './controllers/media.controller';
import { MediaMiddleware } from './middlewares/media.middleware';

export class MediaRouter extends BaseRouter<MediaController, MediaMiddleware> {
   constructor() {
      super(MediaController, MediaMiddleware);
   }

   public routes(): void {
      this.router.get('/image/:imageName', (req, res) => {
         this.controller.getImage(req, res);
      });

      this.router.get('/play/:trackId', (req, res) => {
         this.controller.playTrack(req, res);
      });
   }
}
