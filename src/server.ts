import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { ArtistRouter } from './routers/artist.router';

class ServerBootstrap {
   // para las configuraciones del dotenv deberia heredar de la clase ServerConfig

   private app: express.Application = express();
   private host: string = 'localhost';
   private port: number = 8000;

   constructor() {
      // seteando middlewares
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(morgan('dev'));
      this.app.use(cors());
      this.app.use('/api', this.routes());

      this.listen();
   }

   public routes(): Array<express.Router> {
      const routers = [new ArtistRouter()];
      return routers.map(router => router.router);
   }

   public listen(): void {
      this.app.listen(this.port, () => {
         console.log(`server listening on ${this.host}:${this.port}`);
      });
   }
}

new ServerBootstrap();
