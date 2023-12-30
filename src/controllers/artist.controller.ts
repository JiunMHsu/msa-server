import { Request, Response } from 'express';
import { Artist, ArtistModel, dataBase } from '../models';

export class ArtistController {
   public getArtist(req: Request, res: Response) {
      try {
         const artist = new ArtistModel().getArtist(req.params.id);

         artist.then(val => {
            res.status(200).json(val);
         });
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public getDiscography(req: Request, res: Response) {
      console.log(req.body);
      res.status(200);
   }
}
