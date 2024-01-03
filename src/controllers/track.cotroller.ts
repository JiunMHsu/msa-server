import { Request, Response } from 'express';
import { join } from 'node:path';
import { Streamer } from '../utilities';
import { dataBase } from '../models';
import { ServerConfig } from '../config/config';

export interface DBTrack {
   track_id: string;
   album_id: string;
   title: string;
   disc_number: number;
   track_number: number;
   duration: Date; // o string
   is_explicit: boolean;
   plays: number;
   source_file: string;
}

export class TrackController extends ServerConfig {
   private get assetsDir() {
      return this.getEnviroment('ASSETS_DIR') ?? __dirname;
   }
   public async playTrack(req: Request, res: Response) {
      const [results] = await dataBase.selectQuery<DBTrack>(
         `SELECT * FROM track WHERE track_id = ?`,
         [req.params.track_id],
      );

      const albumDir = results.album_id;
      const fileName = results.source_file;
      const streamer = new Streamer();
      const filePath = join(this.assetsDir, `${albumDir}`, `${fileName}`);
      streamer.streamAudio(filePath, req.headers.range, res);
   }
}
