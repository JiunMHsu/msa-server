import { Module } from '@nestjs/common';
import { ArtistManagersService } from './artist-managers.service';
import { ArtistManagersController } from './artist-managers.controller';

@Module({
    controllers: [ArtistManagersController],
    providers: [ArtistManagersService],
})
export class ArtistManagersModule {}
