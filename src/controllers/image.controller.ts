import { Request, Response } from 'express';
import { join } from 'path';

export class ImageController {
   public getImage(req: Request, res: Response) {
      const imageName: string = req.params.image_name;
      res.sendFile(join(__dirname, `${imageName}`));
   }
}
