import { ArtistController } from '../controllers/artist.conteoller';
import { BaseRouter } from './router';

export class ArtistRouter extends BaseRouter<ArtistController> {
   constructor() {
      super(ArtistController);
   }

   override routes(): void {
      this.router.get('/artist/:id', (req, res) => {
         this.controller.getArtist(req, res);
      });

      this.router.get('/artist/:artist_id/discography', (req, res) => {
         this.controller.getDiscography(req, res);
      });
   }
}
