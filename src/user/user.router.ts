import { BaseRouter } from '../shared/router/router';
import { UserController } from './controllers/user.controller';
import { UserMiddleware } from './middlewares/user.middleware';

export class UserRouter extends BaseRouter<UserController, UserMiddleware> {
   constructor() {
      super(UserController, UserMiddleware);
   }

   public routes(): void {
      this.router.get(
         '/user/:userId',
         (req, res, next) => [this.middleware.authenticate(req, res, next)],
         (req, res) => {
            res.send(`user ${req.params.userId}`);
            // this.controller.getUser(req, res);
         },
      );
   }
}
