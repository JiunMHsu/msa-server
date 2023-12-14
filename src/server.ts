import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

class ServerBootstrap {
  public app: express.Application = express();
  private host: string = 'localhost';
  private port: number = 8000;

  constructor() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
    this.app.use(cors());

    this.app.get('/api', (req, res) => {
      res.status(200).json({
        mensaje: 'hola mundo',
      });
    });

    this.listen();
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`server listening on ${this.host}:${this.port}`);
    });
  }
}

new ServerBootstrap();
