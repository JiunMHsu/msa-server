import { Module } from '@nestjs/common';
import { PlaybacksService } from './playbacks.service';
import { PlaybacksController } from './playbacks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playback } from './entities/playback.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Playback])],
    controllers: [PlaybacksController],
    providers: [PlaybacksService],
})
export class PlaybacksModule {}
