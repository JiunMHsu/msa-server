import { Response } from 'express';
import { statSync, PathLike, createReadStream } from 'node:fs';

export class Streamer {
   // public streamImage(filePath) {}

   public streamAudio(
      filePath: PathLike,
      range: string | undefined,
      res: Response,
   ) {
      const stat = statSync(filePath);
      const fileSize = stat.size;

      if (range) {
         const parts = range.replace(/bytes=/, '').split('-'); // ?????????
         const start = parseInt(parts[0], 10);
         const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
         const chunksize = end - start + 1;
         const file = createReadStream(filePath, { start, end });
         const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'audio/flac',
         };
         res.writeHead(206, head);
         file.pipe(res);
      } else {
         const head = {
            'Content-Length': fileSize,
            'Content-Type': 'audio/flac',
         };
         res.writeHead(200, head);
         createReadStream(filePath).pipe(res);
      }
   }
}
