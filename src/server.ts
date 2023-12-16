import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { ArtistRouter } from './routers/artist.router';
import { ImageRouter } from './routers/image.router';
import { ServerConfig } from './config/config';

class ServerBootstrap extends ServerConfig {
   private app: express.Application;
   private host: string;
   private port: number;

   constructor() {
      super();
      this.app = express();
      this.host = this.getEnviroment('HOST') || 'localhost';
      this.port = this.getNumberEnv('PORT') || 8080;

      // seteando middlewares
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(morgan('dev'));
      this.app.use(cors());
      this.app.use('/api', this.routes());

      this.listen();
   }

   public routes(): Array<express.Router> {
      const routers = [new ImageRouter(), new ArtistRouter()];
      return routers.map(router => router.router);
   }

   public listen(): void {
      this.app.listen(this.port, () => {
         console.log(`server listening on ${this.host}:${this.port}`);
      });
   }
}

new ServerBootstrap();
