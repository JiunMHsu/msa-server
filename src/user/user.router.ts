import { BaseRouter } from '../shared';
import { UserController } from './user.controller';
import { UserMiddleware } from './user.middleware';

export class UserRouter extends BaseRouter<UserController, UserMiddleware> {
   constructor() {
      super(UserController, UserMiddleware);
   }

   public routes(): void {
      this.router.get('/user', (req, res) => {
         this.controller.getUser(req, res);
      });

      this.router.post(
         '/user/login',
         (req, res, next) => [
            this.middleware.validateCredential(req, res, next),
         ],
         (req, res) => {
            this.controller.loginUser(req, res);
         },
      );

      this.router.post(
         '/user/register',
         (req, res, next) => [
            this.middleware.validateCredential(req, res, next),
         ],
         (req, res) => {
            this.controller.createUser(req, res);
         },
      );
   }
}
