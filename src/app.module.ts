import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '@config/app.config';
import { HealthModule } from './health/health.module';
import { LoggerModule } from '@commons/logger/logger.module';
import { PlaylistsModule } from '@src/modules/collection/playlists/playlists.module';
import { ArtistManagersModule } from '@modules/artist-managers/artist-managers.module';
import { DatabaseModule } from '@database/database.module';
import { AuthModule } from '@src/modules/core/auth/auth.module';
import { CoreModule } from '@modules/core/core.module';
import { BillingModule } from '@modules/billing/billing.module';
import { SubscriptionsModule } from '@modules/subscriptions/subscriptions.module';
import { CollectionModule } from '@modules/collection/collection.module';
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
        CollectionModule,
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
