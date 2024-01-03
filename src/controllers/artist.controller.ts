import { Request, Response } from 'express';
import { ArtistModel } from '../models';

export class ArtistController {
   private model = new ArtistModel();

   public async getArtist(req: Request, res: Response) {
      try {
         const artist = await this.model.getArtist(req.params.id);

         console.log(artist);

         res.status(200).json(artist);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async getDiscography(req: Request, res: Response) {
      console.log(req.body);
      res.status(200);
   }
}
