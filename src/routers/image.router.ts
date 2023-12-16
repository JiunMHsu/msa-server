import { ImageController } from '../controllers/image.controller';
import { BaseRouter } from './router';

export class ImageRouter extends BaseRouter<ImageController> {
   constructor() {
      super(ImageController);
   }

   override routes(): void {
      this.router.get('/image/:image_name', (req, res) =>
         this.controller.getImage(req, res),
      );
   }
}
