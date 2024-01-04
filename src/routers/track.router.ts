import { TrackController } from '../controllers';
import { BaseRouter } from './router';

export class TrackRouter extends BaseRouter<TrackController> {
   constructor() {
      super(TrackController);
   }

   // override routes(): void {
   //    this.router.get('/track/:track_id/play', (req, res) => {
   //       this.controller.playTrack(req, res);
   //    });
   // }
}
