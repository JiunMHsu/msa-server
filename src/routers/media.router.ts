import { BaseRouter } from './router';
import { MediaController } from '../controllers';

export class MediaRouter extends BaseRouter<MediaController> {
   constructor() {
      super(MediaController);
   }

   override routes(): void {
      this.router.get('/image/:image_name', (req, res) => {
         this.controller.getImage(req, res);
      });

      this.router.get('/play/:track_id', (req, res) => {
         this.controller.playTrack(req, res);
      });
   }
}
