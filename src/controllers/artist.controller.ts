import { Request, Response } from 'express';
import { ArtistModel } from '../models';

export class ArtistController {
   private model = new ArtistModel();

   public async getAllArtist(res: Response) {
      try {
         const artists = await this.model.getAll();
         res.status(200).json(artists);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async getArtist(req: Request, res: Response) {
      try {
         const artist = await this.model.getById(req.params.artist_id);
         res.status(200).json(artist);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async getDiscography(req: Request, res: Response) {
      console.log(req.header);
      res.status(200).json({});
   }

   public async getPlaylists(req: Request, res: Response) {
      console.log(req.header);
      res.status(200).json({});
   }
}
