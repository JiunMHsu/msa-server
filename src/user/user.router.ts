import { BaseRouter } from '../shared';
import { UserController } from './user.controller';
import { UserMiddleware } from './user.middleware';

export class UserRouter extends BaseRouter<UserController, UserMiddleware> {
   constructor() {
      super(UserController, UserMiddleware);
   }

   public routes(): void {
      this.router.get(
         '/user/',
         (req, res, next) => [
            this.middleware.verifyAccessToken(req, res, next),
         ],
         (req, res) => {
            this.controller.getUser(req, res);
         },
      );

      this.router.get(
         '/user/preview/:userId',
         (req, res) => {
            this.controller.getUserPreview(req, res);
         },
      );

      this.router.get(
         '/user/profile/:userId',
         (req, res, next) => [
            this.middleware.verifyAccessToken(req, res, next),
         ],
         (req, res) => {
            this.controller.getUserProfile(req, res);
         },
      );

      // A considerar: implementar el middleware para desencriptar las credenciales
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
            this.middleware.validateSignUpData(req, res, next),
         ],
         (req, res) => {
            this.controller.createUser(req, res);
         },
      );
   }
}
