import { BaseRouter } from './router';
import { AssetController } from '../controllers';

export class AssetRouter extends BaseRouter<AssetController> {
   constructor() {
      super(AssetController);
   }

   override routes(): void {
      this.router.get('/image/:image_name', (req, res) => {
         this.controller.getImage(req, res);
      });
   }
}
