import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { ServerConfig } from './config/config';
import { ArtistRouter, AssetRouter, TrackRouter } from './routers';

class ServerBootstrap extends ServerConfig {
   private app: express.Application = express();
   private host: string;
   private port: number;

   constructor() {
      super();
      this.host = this.getEnviroment('HOST') || '127.0.0.1';
      this.port = this.getNumberEnv('PORT') || 5050;

      this.app.disable('x-powered-by');

      // seteando middlewares
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(morgan('dev'));
      this.app.use(cors());
      this.app.use('/api', this.routes());

      this.listen();
   }

   private routes(): Array<express.Router> {
      const routers = [
         new AssetRouter(),
         new ArtistRouter(),
         new TrackRouter(),
      ];
      return routers.map(router => router.router);
   }

   public listen(): void {
      this.app.listen(this.port, () => {
         console.log(`server listening on ${this.host}:${this.port}`);
      });
   }
}

new ServerBootstrap();
