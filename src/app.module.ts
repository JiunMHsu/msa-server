import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { LoggerModule } from './common/logger/logger.module';
import { UsersModule } from './modules/users/users.module';
import { AlbumsModule } from './modules/albums/albums.module';
import { ArtistsModule } from './modules/artists/artists.module';
import { TracksModule } from './modules/tracks/tracks.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { PlaylistsModule } from './modules/playlists/playlists.module';
import { ArtistManagersModule } from './modules/artist-managers/artist-managers.module';

@Module({
    imports: [
        // capaz cargar el app.config.ts
        ConfigModule.forRoot({ isGlobal: true, cache: true }),
        LoggerModule,
        HealthModule,
        UsersModule,
        AlbumsModule,
        ArtistsModule,
        TracksModule,
        AccountsModule,
        PlaylistsModule,
        ArtistManagersModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
