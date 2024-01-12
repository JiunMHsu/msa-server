import { BaseRouter } from '../shared/router/router';
import { ArtistController } from './artist.controller';
import { ArtistMiddleware } from './artist.middleware';

export class ArtistRouter extends BaseRouter<
   ArtistController,
   ArtistMiddleware
> {
   constructor() {
      super(ArtistController, ArtistMiddleware);
   }

   public routes(): void {
      // this.router.get('/artist/all', (_, res) => {
      //    this.controller.getAllArtist(res);
      // });

      this.router.get('/artist/discography/:artistId', (req, res) => {
         this.controller.getDiscography(req, res);
      });

      this.router.get('/artist/playlists/:artistId', (req, res) => {
         this.controller.getPlaylists(req, res);
      });

      this.router.get('/artist/:artistId', (req, res) => {
         this.controller.getArtist(req, res);
      });
   }
}
