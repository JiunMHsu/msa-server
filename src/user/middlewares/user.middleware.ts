import { Request, Response, NextFunction } from 'express';

export class UserMiddleware {
   // public async verifyHeaderToken(
   //    req: Request,
   //    res: Response,
   //    next: NextFunction,
   // ) {
   //    const token = req.headers.authorization;

   //    if (!token) {
   //       // caso no autorizado
   //       res.status(401).send('No token provided');
   //    }

   //    next();
   // }

   public async validateCredential(
      req: Request,
      res: Response,
      next: NextFunction,
   ) {
      console.log(req);
      console.log(res);
      next();
   }
}
