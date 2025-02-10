import { Module } from '@nestjs/common';
import { AudiosModule } from './audios/audios.module';
import { ImagesModule } from './images/images.module';

@Module({
    imports: [AudiosModule, ImagesModule],
})
export class MediaModule {}
