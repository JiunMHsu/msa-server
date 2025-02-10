import { Module } from '@nestjs/common';
import { AudiosModule } from './audios/audios.module';

@Module({
    imports: [AudiosModule],
})
export class MediaModule {}
