import { Request, Response } from 'express';
import { Artist, ArtistModel, dataBase } from '../models';

export class ArtistController {
   public async getArtist(req: Request, res: Response) {
      try {
         const artist = await new ArtistModel().getArtist(req.params.id);
         console.log(artist);
         res.status(200).json(artist);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public getDiscography(req: Request, res: Response) {
      console.log(req.body);
      res.status(200);
   }
}
