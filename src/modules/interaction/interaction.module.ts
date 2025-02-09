import { Module } from '@nestjs/common';
import { SavesModule } from './saves/saves.module';
import { FollowsModule } from './follows/follows.module';
import { LikesModule } from './likes/likes.module';
import { PlaybacksModule } from './playbacks/playbacks.module';

@Module({
    imports: [SavesModule, FollowsModule, LikesModule, PlaybacksModule],
})
export class InteractionModule {}
