import { Request, Response } from 'express';
import { AlbumService } from '../services/album.service';

export class AlbumController {
   public async getAlbum(req: Request, res: Response) {
      const albumId = req.params.albumId;

      try {
         const album = await AlbumService.getById(albumId);
         res.status(200).json(album);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async getByArtist(req: Request, res: Response) {
      const artistId = req.params.artistId;

      try {
         const albums = await AlbumService.getByArtist(artistId);
         res.status(200).json(albums);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   // public async createAlbum(req: Request, res: Response) {}

   // public async deleteAlbum(req: Request, res: Response) {}
}
