import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtConstants {
    constructor(private readonly configService: ConfigService) {}

    secret(): string {
        return this.configService.get<string>('jwt.secret');
    }

    refreshSecret(): string {
        return this.configService.get<string>('jwt.refreshSecret');
    }

    expiresIn(): number {
        return this.configService.get<number>('jwt.expiresIn');
    }

    refreshExpiresIn(): number {
        return this.configService.get<number>('jwt.refreshExpiresIn');
    }
}
