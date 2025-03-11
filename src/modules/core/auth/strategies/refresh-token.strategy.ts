import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { JwtConstants } from '../constants/jwt.const';
import { Injectable } from '@nestjs/common';
import { User } from '@modules/core/users/entities/user.entity';
import { TokenPayload } from '../interfaces/token-payload.interface';
import { Request } from 'express';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
    Strategy,
    'jwt-refresh',
) {
    constructor(private readonly jwtConstants: JwtConstants) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (req: Request) => RefreshTokenStrategy.extractFromCookie(req),
            ]),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.refreshSecret(),
            passReqToCallback: true,
        });
    }

    validate(req: Request, payload: TokenPayload): User {
        return {
            id: payload.sub,
            email: payload.email,
            refreshToken: RefreshTokenStrategy.extractFromCookie(req),
        } as User;
    }

    private static extractFromCookie(req: Request): string {
        return req.cookies['refresh_token'] as string;
    }
}
