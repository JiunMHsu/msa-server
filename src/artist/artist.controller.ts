import { Request, Response } from 'express';
import { ArtistService } from './artist.service';

export class ArtistController {
   public async getArtist(req: Request, res: Response): Promise<void> {
      const artistId = req.params.artistId;

      try {
         const artist = await ArtistService.getById(artistId);
         res.json(artist);
      } catch (error) {
         res.status(500).json(error);
      }
   }

   public async getArtistPreview(req: Request, res: Response): Promise<void> {
      const artistId = req.params.artistId;

      try {
         const artistPreview = await ArtistService.getPreview(artistId);
         res.json(artistPreview);
      } catch (error) {
         res.status(500).json(error);
      }
   }

   public async getDiscography(req: Request, res: Response): Promise<void> {
      const artistId = req.params.artistId;

      try {
         const discography = await ArtistService.getDiscography(artistId);
         res.json(discography);
      } catch (error) {
         res.status(500).json(error);
      }
   }

   public async getPlaylists(req: Request, res: Response): Promise<void> {
      const artistId = req.params.artistId;

      try {
         const playlists = await ArtistService.getPlaylists(artistId);
         res.json(playlists);
      } catch (error) {
         res.status(500).json(error);
      }
   }
}
