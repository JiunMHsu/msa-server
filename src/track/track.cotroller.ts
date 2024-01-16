import { Request, Response } from 'express';
import { TrackService } from './track.service';

export class TrackController {
   public async getTrack(req: Request, res: Response) {
      const trackId = req.params.trackId;

      try {
         const track = await TrackService.getTrack(trackId);
         res.status(200).json(track);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   // public async getTrackCredits(req: Request, res: Response) {
   //    const trackId = req.params.trackId;

   //    try {
   //       const credits = await TrackService.getCredits(trackId);
   //       res.status(200).json(credits);
   //    } catch (error) {
   //       res.status(500).send(`Error produced: ${error}`);
   //    }
   // }

   // public async getTrackLyrics(req: Request, res: Response) {
   //    const trackId = req.params.trackId;

   //    try {
   //       const lyrics = await TrackService.getLyrics(trackId);
   //       res.status(200).json(lyrics);
   //    } catch (error) {
   //       res.status(500).send(`Error produced: ${error}`);
   //    }
   // }
}
