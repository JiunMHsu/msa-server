import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { LoggerModule } from '@commons/logger/logger.module';
import configuration from '@config/app.config';
import { AlbumsModule } from '@modules/albums/albums.module';
import { ArtistsModule } from '@modules/artists/artists.module';
import { TracksModule } from '@modules/tracks/tracks.module';
import { AccountsModule } from '@modules/accounts/accounts.module';
import { PlaylistsModule } from '@modules/playlists/playlists.module';
import { ArtistManagersModule } from '@modules/artist-managers/artist-managers.module';
import { DatabaseModule } from '@database/database.module';
import { AuthModule } from '@modules/auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            load: [configuration],
        }),
        DatabaseModule,
        LoggerModule,
        HealthModule,
        AlbumsModule,
        ArtistsModule,
        TracksModule,
        AccountsModule,
        PlaylistsModule,
        ArtistManagersModule,
        AuthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
