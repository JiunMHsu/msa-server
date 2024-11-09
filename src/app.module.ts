import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { LoggerModule } from './common/logger/logger.module';
import { UsersModule } from './users/users.module';
import { AlbumsModule } from './albums/albums.module';
import { ArtistsModule } from './artists/artists.module';
import { TracksModule } from './tracks/tracks.module';
import { AccountsModule } from './accounts/accounts.module';
import { PlaylistsModule } from './playlists/playlists.module';

@Module({
    imports: [
        // capaz cargar el configuration.ts
        ConfigModule.forRoot({ isGlobal: true, cache: true }),
        LoggerModule,
        HealthModule,
        UsersModule,
        AlbumsModule,
        ArtistsModule,
        TracksModule,
        AccountsModule,
        PlaylistsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
