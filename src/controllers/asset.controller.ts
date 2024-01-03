import { join } from 'node:path';
import { Request, Response } from 'express';
import { ServerConfig } from '../config/config';

export class AssetController extends ServerConfig {
   private get assetsDir() {
      return this.getEnviroment('ASSETS_DIR') ?? __dirname;
   }

   public getImage(req: Request, res: Response) {
      const imageName: string = req.params.image_name;
      console.log(this.assetsDir);

      res.sendFile(join(this.assetsDir, '_images', `${imageName}`));
   }

   // public getAudio(req: Request, res: Response) {}
}
