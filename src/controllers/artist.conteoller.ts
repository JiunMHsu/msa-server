import { Request, Response } from 'express';

export class ArtistController {
   public getArtist(req: Request, res: Response) {
      // DB
      const artists = new Map<string, object>([
         ['09s8dv', { name: 'Namie Amuro', age: 46 }],
         ['0987se', { name: 'Kanye West', age: 46 }],
      ]);

      // Busqueda -> Respuesta

      res.status(200).json(artists.get(req.params.id));
   }

   public createArtist(req: Request, res: Response) {
      console.log(req.body);
      res.status(200);
   }
}
