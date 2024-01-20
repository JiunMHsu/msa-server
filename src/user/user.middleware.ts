import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

import { ServerConfig } from '../config/config';

export class UserMiddleware extends ServerConfig {
   constructor() {
      super();
   }

   private get secret(): jwt.Secret {
      const key = this.getEnviroment('JWT_SECRET') ?? 'secret';
      return key;
   }

   /**
    * funca :D
    */
   public async verifyAccessToken(
      req: Request,
      res: Response,
      next: NextFunction,
   ): Promise<void> {
      const token = req.headers.authorization ?? '';

      if (!token) {
         res.status(401).json({ message: 'No token provided' });
         return;
      }

      try {
         const decoded = jwt.verify(token, this.secret);
         req.body = decoded;
         next();
      } catch (error) {
         res.status(401).json({ message: 'Invalid token' });
      }
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
