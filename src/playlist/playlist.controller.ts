import { Request, Response } from 'express';
import { PlaylistService } from './playlist.service';

export class PlaylistController {
   public async getPlaylist(req: Request, res: Response) {
      const playlistId = req.params.playlistId;

      try {
         const playlist = await PlaylistService.getPlaylist(playlistId);
         res.status(200).json(playlist);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async getPlaylistPreview(req: Request, res: Response) {
      const playlistId = req.params.playlistId;

      try {
         const tracks = await PlaylistService.getPreview(playlistId);
         res.status(200).json(tracks);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }
}
