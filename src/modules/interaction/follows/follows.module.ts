import { Module } from '@nestjs/common';
import { FollowsService } from './follows.service';
import { FollowsController } from './follows.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountFollow } from './entities/account-follow.entity';
import { ArtistFollow } from './entities/artist-follow.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AccountFollow, ArtistFollow])],
    controllers: [FollowsController],
    providers: [FollowsService],
})
export class FollowsModule {}
