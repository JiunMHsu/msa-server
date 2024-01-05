import { Request, Response } from 'express';
import { ArtistModel, AlbumModel } from '../models';

export class ArtistController {
   public async getAllArtist(res: Response) {
      const model = new ArtistModel();

      try {
         const artists = await model.getAll();
         res.status(200).json(artists);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async getArtist(req: Request, res: Response) {
      const model = new ArtistModel();

      try {
         const artist = await model.getById(req.params.artist_id);
         res.status(200).json(artist);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async getDiscography(req: Request, res: Response) {
      const model = new AlbumModel();

      try {
         const albums = await model.getAllByArtist(req.params.artist_id);
         res.status(200).json(albums);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
      res.status(200).json({});
   }

   public async getPlaylists(req: Request, res: Response) {
      console.log(req.header);
      res.status(200).json({});
   }
}
