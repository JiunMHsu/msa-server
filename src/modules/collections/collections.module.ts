import { Module } from '@nestjs/common';
import { TracksModule } from './tracks/tracks.module';
import { AlbumsModule } from './albums/albums.module';

@Module({
    imports: [AlbumsModule, TracksModule],
    controllers: [],
    providers: [],
})
export class CollectionsModule {}
