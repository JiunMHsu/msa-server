import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { JWTHandler } from '../../shared';

export class UserController {
   public async getUser(req: Request, res: Response) {
      const accessToken = req.headers.authorization ?? '';

      try {
         const { userId } = (await new JWTHandler().validateToken(
            accessToken,
         )) as { userId: string };

         res.send(userId); // 80b98b16-94da-4246-9996-6e74e9fff286

         const user = await UserService.getById(userId);
         const library = await UserService.getLibrary(userId);

         res.status(200).json(user);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async loginUser(req: Request, res: Response) {
      const jwt = new JWTHandler();
      const { email, password } = req.body;
      try {
         // 80b98b16-94da-4246-9996-6e74e9fff286
         const userId = await UserService.resolveToId(email, password);
         const token = await jwt.generateToken(userId);
         res.status(200).json({ accessToken: token });
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async createUser(req: Request, res: Response) {
      const user = req.body;

      try {
         const result = await UserService.createUser(user);

         // should redirect after creating an user
         // res.redirect(303, `/api/user/${result.id}`);
         res.status(303).json(result);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async updateUser(req: Request, res: Response) {
      const userId = req.params.userId;

      try {
         const result = await UserService.updateUser(userId, req.body);
         res.status(200).json(result);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async deleteUser(req: Request, res: Response) {
      const userId = req.params.userId;

      try {
         const result = await UserService.deleteUser(userId);
         res.status(200).json(result);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }
}
