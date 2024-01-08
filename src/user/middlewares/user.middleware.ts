import { Request, Response, NextFunction } from 'express';

export class UserMiddleware {
   public async authenticate(req: Request, _: Response, next: NextFunction) {
      const userId = req.params.userId;
      console.log(`User ${userId} authenticated`);

      next();
   }
}
