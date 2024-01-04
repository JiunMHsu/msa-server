import { Request, Response } from 'express';
import { join } from 'node:path';
import { ServerConfig } from '../config/config';
import { TrackModel } from '../models';
import { Streamer } from '../utilities';

export class MediaController extends ServerConfig {
   private get assetsDir() {
      return this.getEnviroment('ASSETS_DIR') ?? __dirname;
   }

   public getImage(req: Request, res: Response) {
      const imageName: string = req.params.image_name;
      console.log(this.assetsDir);

      res.sendFile(join(this.assetsDir, '_images', `${imageName}`));
   }

   public async playTrack(req: Request, res: Response) {
      const trackModel = new TrackModel();
      const { albumId, sourceFile } = await trackModel.getById(
         req.params.track_id,
      );

      const streamer = new Streamer();
      const filePath = join(this.assetsDir, `${albumId}`, `${sourceFile}`);
      streamer.streamAudio(filePath, req.headers.range, res);
   }
}
