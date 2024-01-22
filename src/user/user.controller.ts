import { Request, Response } from 'express';
import { UserService } from './services/user.service';
import { JWTHandler } from '../shared';

export class UserController {
   public async getUser(req: Request, res: Response) {
      const { userId } = req.body;

      try {
         const user = await UserService.getUser(userId);

         res.status(200).json(user);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async getUserPreview(req: Request, res: Response) {
      const userId = req.params.userId;

      try {
         const user = await UserService.getPreview(userId);
         res.status(200).json(user);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async getUserProfile(req: Request, res: Response) {
      const accessToken = req.headers.authorization ?? '';

      try {
         const { userId } = (await new JWTHandler().validateToken(
            accessToken,
         )) as { userId: string };

         const user = await UserService.getProfile(userId);
         res.status(200).json(user);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async loginUser(req: Request, res: Response) {
      const jwt = new JWTHandler();
      const { email, password } = req.body;
      try {
         const userId = await UserService.resolveToId(email, password);
         const token = await jwt.generateToken(userId);
         const user = await UserService.getUser(userId);

         res.status(200).json({ accessToken: token, user: user });
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async createUser(req: Request, res: Response) {
      const { name, email, password } = req.body;

      try {
         await UserService.createUser(email, password, name);
         res.status(201).json({ message: 'User created' });
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   // TODO: Implement
   public async updateUser(req: Request, res: Response) {
      const userId = req.params.userId;

      try {
         const result = await UserService.updateUser(userId, req.body);
         res.status(200).json(result);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   // TODO: Implement
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
