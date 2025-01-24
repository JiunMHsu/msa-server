import { Module } from '@nestjs/common';
import { StreamsModule } from './streams/streams.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
    imports: [StreamsModule, AccountsModule],
    controllers: [],
    providers: [],
})
export class CoreModule {}
