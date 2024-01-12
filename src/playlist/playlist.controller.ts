import { Request, Response } from 'express';
import { PlaylistService } from './playlist.service';

export class PlaylistController {
   public async getPlaylist(req: Request, res: Response) {
      const playlistId = req.params.playlistId;

      try {
         const playlist = await PlaylistService.getById(playlistId);
         res.status(200).json(playlist);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async getPlaylistTracks(req: Request, res: Response) {
      const playlistId = req.params.playlistId;

      try {
         const tracks = await PlaylistService.getTracks(playlistId);
         res.status(200).json(tracks);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async createPlaylist(req: Request, res: Response) {
      const userId = req.params.userId;

      try {
         const result = await PlaylistService.create(userId);
         res.status(200).json(result);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async updateTitle(req: Request, res: Response) {
      const playlistId = req.params.playlistId;
      const newTitle = req.body.title;

      try {
         const result = await PlaylistService.updateTitle(playlistId, newTitle);
         res.status(200).json(result);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async updateCover(req: Request, res: Response) {
      const playlistId = req.params.playlistId;
      const newCover = req.body.cover;

      try {
         const result = await PlaylistService.updateCover(playlistId, newCover);
         res.status(200).json(result);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async addTrack(req: Request, res: Response) {
      const playlistId = req.params.playlistId;
      const trackId = req.params.trackId;

      try {
         const playlist = await PlaylistService.addTrack(playlistId, trackId);
         res.status(200).json(playlist);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async removeTrack(req: Request, res: Response) {
      const playlistId = req.params.playlistId;
      const trackId = req.params.trackId;

      try {
         const playlist = await PlaylistService.removeTrack(
            playlistId,
            trackId,
         );
         res.status(200).json(playlist);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async deletePlaylist(req: Request, res: Response) {
      const playlistId = req.params.playlistId;

      try {
         const result = await PlaylistService.delete(playlistId);
         res.status(200).json(result);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }
}
