import { Module } from '@nestjs/common';
import { SavesService } from './saves.service';
import { SavesController } from './saves.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumSave } from './entities/album-save.entity';
import { PlaylistSave } from './entities/playlist-save.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AlbumSave, PlaylistSave])],
    controllers: [SavesController],
    providers: [SavesService],
})
export class SavesModule {}
