import { Module } from '@nestjs/common';
import { UsersModule } from '@modules/core/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JwtConstants } from './constants/jwt.const';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';
import { AccessTokenStrategy } from './strategies/access-token.strategy';

@Module({
    imports: [UsersModule, JwtModule.register({}), ConfigModule],
    controllers: [AuthController],
    providers: [
        AuthService,
        JwtConstants,
        AccessTokenStrategy,
        RefreshTokenStrategy,
    ],
})
export class AuthModule {}
