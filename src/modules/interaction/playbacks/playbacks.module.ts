import { Module } from '@nestjs/common';
import { PlaybacksService } from './playbacks.service';
import { PlaybacksController } from './playbacks.controller';

@Module({
    controllers: [PlaybacksController],
    providers: [PlaybacksService],
})
export class PlaybacksModule {}
