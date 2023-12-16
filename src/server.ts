import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { ArtistRouter } from './routers/artist.router';
import { ImageRouter } from './routers/image.router';
import { ServerConfig } from './config/config';

class ServerBootstrap extends ServerConfig {
   // para las configuraciones del dotenv deberia heredar de la clase ServerConfig

   private app: express.Application = express();
   private host: string = this.getEnviroment('HOST') || 'localhost';
   private port: number = this.getNumberEnv('PORT') || 8080;

   constructor() {
      super();
      console.log(process.env.NODE_ENV);
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
