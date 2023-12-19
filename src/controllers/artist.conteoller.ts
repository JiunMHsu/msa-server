import { Request, Response } from 'express';
import { dataBase } from '../database/connection.test';
import { error } from 'console';

interface Artist {
   artist_id: number;
   artist_name: string;
   verified: boolean;
   followers: number;
   monthly_listeners: number;
   profile_photo: string;
   profile_banner: string;
   about: string;
}

export class ArtistController {
   private _artist: Artist = {} as Artist;

   public getArtist(req: Request, res: Response) {
      // Busqueda -> Respuesta
      // ojo con esto, deberia ser trabajo del modelo
      const fetched = dataBase.query(
         `SELECT * FROM artist WHERE artist_id = ?`,
         [req.params.id],
      );
      fetched
         .then(artist => {
            this._artist = artist;
            console.log(artist);
            res.status(200).json(...artist);
         })
         .catch(error => {
            res.status(500).send(`Error produced: ${error}`);
         });
   }

   public getDiscography(req: Request, res: Response) {
      console.log(req.body);
      res.status(200);
   }
}
