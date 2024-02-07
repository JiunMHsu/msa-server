import { Request, Response } from 'express';
import { AlbumService } from './album.service';

export class AlbumController {
   /**
    * Genera la respuesta de un album completo
    *
    * @param req
    * @param res
    */
   public async getAlbum(req: Request, res: Response): Promise<void> {
      const albumId = req.params.albumId;
      try {
         const album = await AlbumService.getAlbum(albumId);
         res.status(200).json(album);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   // !! not sure what for
   public async getAlbumPreview(req: Request, res: Response): Promise<void> {
      const albumId = req.params.albumId;
      try {
         const preview = await AlbumService.getPreview(albumId);
         res.status(200).json(preview);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   // !!

   public async publishAlbum(req: Request, res: Response): Promise<void> {
      console.log(req.body);
      res.status(200).send({ message: 'publishAlbum' });
   }

   public async unpublishAlbum(req: Request, res: Response): Promise<void> {
      console.log(req.body);
      res.status(200).send({ message: 'unpublishAlbum' });
   }

   public async updateAlbum(req: Request, res: Response): Promise<void> {
      console.log(req.body);
      res.status(200).send({ message: 'updateAlbum' });
   }
}
