import { Module } from '@nestjs/common';
import { ArtistManagersService } from './artist-managers.service';
import { ArtistManagersController } from './artist-managers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistManager } from './entities/artist-manager.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ArtistManager])],
    controllers: [ArtistManagersController],
    providers: [ArtistManagersService],
})
export class ArtistManagersModule {}
