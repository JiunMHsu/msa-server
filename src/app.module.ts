import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '@config/app.config';
import { HealthModule } from './health/health.module';
import { LoggerModule } from '@commons/logger/logger.module';
import { ArtistManagersModule } from '@modules/artist-managers/artist-managers.module';
import { DatabaseModule } from '@database/database.module';
import { CoreModule } from '@modules/core/core.module';
import { CollectionModule } from '@modules/collection/collection.module';
import { InteractionModule } from '@modules/interaction/interaction.module';
import { AccountsModule } from '@modules/accounts/accounts.module';
import { StreamsModule } from '@modules/streams/streams.module';
import { ArtistsModule } from '@modules/artists/artists.module';
import { MediaModule } from '@modules/media/media.module';

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
        CoreModule,
        AccountsModule,
        StreamsModule,
        ArtistsModule,
        ArtistManagersModule,
        CollectionModule,
        InteractionModule,
        MediaModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
