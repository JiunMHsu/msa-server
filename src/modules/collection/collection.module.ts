import { Module } from '@nestjs/common';
import { TracksModule } from './tracks/tracks.module';
import { AlbumsModule } from './albums/albums.module';
import { PlaylistsModule } from './playlists/playlists.module';

@Module({
    imports: [AlbumsModule, TracksModule, PlaylistsModule],
    controllers: [],
    providers: [],
})
export class CollectionModule {}
