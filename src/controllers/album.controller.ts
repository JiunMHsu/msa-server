
import { Request, Response } from 'express';
import { AlbumModel } from '../models';

export class AlbumController {
   private model = new AlbumModel();

   // public async getArtist(req: Request, res: Response) {
   //    try {
   //       const artist = await this.model.getArtist(req.params.artist_id);
   //       res.status(200).json(artist);
   //    } catch (error) {
   //       res.status(500).send(`Error produced: ${error}`);
   //    }
   // }

   // public async getDiscography(req: Request, res: Response) {
   //    console.log(req.header);
   //    res.status(200).json({});
   // }

   // public async getPlaylists(req: Request, res: Response) {
   //    console.log(req.header);
   //    res.status(200).json({});
   // }
}