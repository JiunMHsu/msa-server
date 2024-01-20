import { Request, Response, NextFunction } from 'express';

export class UserMiddleware {
   public async verifyAccessToken(
      req: Request,
      res: Response,
      next: NextFunction,
   ) {
      const token = req.headers.authorization;

      if (!token) {
         // caso no autorizado
         res.status(401).send({ message: 'No token provided' });
      }

      try {
      } catch (error) {}

      next();
   }

   public async validateCredential(
      req: Request,
      res: Response,
      next: NextFunction,
   ) {
      console.log(req);
      console.log(res);
      next();
   }

   public async validateUserData(
      req: Request,
      res: Response,
      next: NextFunction,
   ) {
      console.log(req);
      console.log(res);
      next();
   }
}
