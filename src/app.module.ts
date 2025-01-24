import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '@config/app.config';
import { HealthModule } from './health/health.module';
import { LoggerModule } from '@commons/logger/logger.module';
import { PlaylistsModule } from '@modules/playlists/playlists.module';
import { ArtistManagersModule } from '@modules/artist-managers/artist-managers.module';
import { DatabaseModule } from '@database/database.module';
import { AuthModule } from '@modules/auth/auth.module';
import { CoreModule } from '@modules/core/core.module';
import { MusicModule } from '@modules/music/music.module';
import { BillingModule } from '@modules/billing/billing.module';
import { SubscriptionsModule } from '@modules/subscriptions/subscriptions.module';
import { InteractionModule } from '@modules/interaction/interaction.module';

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
        AuthModule,
        CoreModule,
        MusicModule,
        BillingModule,
        SubscriptionsModule,
        InteractionModule,
        // ver como manejar los siguientes
        PlaylistsModule,
        ArtistManagersModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
