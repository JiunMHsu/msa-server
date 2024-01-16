import { Request, Response } from 'express';
import { ArtistService } from './artist.service';

export class ArtistController {
   public async getArtist(req: Request, res: Response): Promise<void> {
      const artistId = req.params.artistId;

      try {
         const artist = await ArtistService.getArtist(artistId);
         res.json(artist);
      } catch (error) {
         res.status(500).json(error);
      }
   }

   public async getArtistPreview(req: Request, res: Response): Promise<void> {
      const artistId = req.params.artistId;

      try {
         const artistPreview = await ArtistService.getPreview(artistId);
         res.json(artistPreview);
      } catch (error) {
         res.status(500).json(error);
      }
   }
}
