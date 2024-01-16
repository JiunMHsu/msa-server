// import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { ServerConfig } from '../../config/config';

export class JWTHandler extends ServerConfig {
   constructor() {
      super();
   }

   private get secret(): jwt.Secret {
      const key = this.getEnviroment('JWT_SECRET') ?? 'secret';
      return key;
   }

   public async generateToken(userId: string): Promise<string> {
      try {
         const token = jwt.sign({ userId: userId }, this.secret);
         return token;
      } catch (error) {
         throw error;
      }
   }

   public async validateToken(token: string) {
      try {
         if (!token) throw new Error('No token provided');

         const jwtData = jwt.verify(token, this.secret);
         return jwtData;
      } catch (error) {
         throw error;
      }
   }
}
