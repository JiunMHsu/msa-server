import { Request, Response } from 'express';
import { AlbumService } from './album.service';

export class AlbumController {
   public async getAlbum(req: Request, res: Response) {
      const albumId = req.params.albumId;

      try {
         const album = await AlbumService.getAlbum(albumId);
         res.status(200).json(album);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async getPreview(req: Request, res: Response) {
      const artistId = req.params.artistId;

      try {
         const albums = await AlbumService.getPreview(artistId);
         res.status(200).json(albums);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   // public async createAlbum(req: Request, res: Response) {
   //    res.status(200).json({
   //       message: 'Album created',
   //       album: { ...req.body },
   //       artist: req.params.artistId,
   //    });

   //    const artistId = req.params.artistId;
   //    const albumName = req.body.albumName;
   //    const albumGenre = req.body.albumGenre;
   //    const albumYear = req.body.albumYear;
   //    const albumCover = req.body.albumCover;

   //    try {
   //       await AlbumService.createAlbum(
   //          artistId,
   //          albumName,
   //          albumGenre,
   //          albumYear,
   //          albumCover,
   //       );
   //       res.status(200).json({ message: 'Album created' });
   //    } catch (error) {
   //       res.status(500).send(`Error produced: ${error}`);
   //    }
   // }

   // public async deleteAlbum(req: Request, res: Response) {}
}
