import { Request, Response } from 'express';
import { AlbumModel } from '../models';

export class AlbumController {
   public async getAlbum(req: Request, res: Response) {
      const model = new AlbumModel();
      try {
         const album = await model.getById(req.params.album_id);

         // album.releaseDate = `${album.releaseDate}`.split('T')[0];

         res.status(200).json(album);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }
}
