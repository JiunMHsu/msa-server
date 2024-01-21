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

   // TODO: Implementar
   public async validateCredential(
      req: Request,
      res: Response,
      next: NextFunction,
   ) {
      const { email, password } = req.body;
      if (!email || !password) {
         res.status(400).json({ message: 'Missing data' });
         return;
      }
      next();
   }

   // TODO: Implementar
   public async validateSignUpData(
      req: Request,
      res: Response,
      next: NextFunction,
   ) {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
         res.status(400).json({ message: 'Missing data' });
         return;
      }
      next();
   }
}
