import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { UsersController } from './users/users.controller';
import { RolesController } from './roles/roles.controller';

@Module({
    imports: [UsersModule, RolesModule],
    controllers: [UsersController, RolesController],
})
export class AuthModule {}
