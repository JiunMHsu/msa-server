import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
   public async getUser(req: Request, res: Response) {
      const userId = req.params.userId;

      try {
         const user = await UserService.getUser(userId);
         res.status(200).json(user);
      } catch (error) {
         res.status(500).send(`Error produced: ${error}`);
      }
   }

   public async createUser(req: Request, res: Response) {
      const user = req.body;

      try {
         const result = await UserService.createUser(user);
         res.status(200).json(result);
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

   // public async authenticateUser(_: Request, res: Response) {}

   // public async getFollowedAlbums(req: Request, res: Response) {}

   // public async getFollowedPlaylists(req: Request, res: Response) {}
}
