import { BaseRouter } from './router';
import { ArtistController } from '../controllers/artist.controller';

export class ArtistRouter extends BaseRouter<ArtistController> {
   constructor() {
      super(ArtistController);
   }

   override routes(): void {
      this.router.get('/artists', (_, res) => {
         this.controller.getAllArtist(res);
      });

      this.router.get('/artist/:artist_id', (req, res) => {
         this.controller.getArtist(req, res);
      });

      this.router.get('/artist/:artist_id/discography', (req, res) => {
         this.controller.getDiscography(req, res);
      });

      this.router.get('/artist/:artist_id/playlists', (req, res) => {
         this.controller.getPlaylists(req, res);
      });
   }
}
