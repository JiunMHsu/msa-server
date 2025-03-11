import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '@modules/core/users/entities/user.entity';
import { JwtConstants } from '../constants/jwt.const';
import { Injectable } from '@nestjs/common';
import { TokenPayload } from '../interfaces/token-payload.interface';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private readonly jwtConstants: JwtConstants) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret(),
        });
    }

    validate(payload: TokenPayload): User {
        return {
            id: payload.sub,
            email: payload.email,
        } as User;
    }
}
