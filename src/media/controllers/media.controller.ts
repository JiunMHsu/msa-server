import { Request, Response } from 'express';
import { join } from 'node:path';

import { ServerConfig } from '../../config/config';

export class MediaController extends ServerConfig {
   private get assetsDir() {
      return this.getEnviroment('ASSETS_DIR') ?? __dirname;
   }

   // !! VER SI HAY Q LLAMAR A SERVICIOS

   public getImage(req: Request, res: Response) {
      const imageName: string = req.params.imageName;
      res.send(`get image ${imageName}`);

      // res.sendFile(join(this.assetsDir, '_images', `${imageName}`));
   }

   public async playTrack(req: Request, res: Response) {
      const trackId = req.params.trackId;
      res.send(`play track ${trackId}`);

      // const { albumId, sourceFile } = await TrackModel.getById(trackId);

      // const streamer = new Streamer();
      // const filePath = join(this.assetsDir, `${albumId}`, `${sourceFile}`);
      // streamer.streamAudio(filePath, req.headers.range, res);
   }
}
