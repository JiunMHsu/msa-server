import { NextFunction, Request, Response } from 'express';

export class AlbumMiddleware {
   public async validateAlbum(req: Request, _: Response, next: NextFunction) {
      // invalid cases, early return
      console.log({ ...req.body });
      next();
   }
}
