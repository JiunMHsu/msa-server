import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { InvalidPasswordException } from './exceptions/auth.exception';
import { JwtService } from '@nestjs/jwt';
import { TokensDto } from './dto/tokens.dto';
import { JwtConstants } from './constants/jwt.const';
import { TokenPayload } from './interfaces/token-payload.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService,

        private readonly configService: ConfigService,
        private readonly jwtConstants: JwtConstants,
    ) {}

    private async hashToken(token: string): Promise<string> {
        const hashSalt = this.configService.get<number>('hashSalt');
        return bcrypt.hash(token, hashSalt);
    }

    async authenticate(loginDto: LoginDto): Promise<User> {
        const { email, password } = loginDto;
        const user = await this.usersService.findOneByEmail(email);
        if (!user) throw new UnauthorizedException('User not found');

        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) throw new InvalidPasswordException();

        return user;
    }

    async generateTokens(user: User): Promise<TokensDto> {
        const payload: TokenPayload = {
            sub: user.id,
            email: user.email,
        };

        const accessTokenOptions = {
            expiresIn: this.jwtConstants.expiresIn(),
            secret: this.jwtConstants.secret(),
        };

        const refreshTokenOptions = {
            expiresIn: this.jwtConstants.refreshExpiresIn(),
            secret: this.jwtConstants.refreshSecret(),
        };

        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, accessTokenOptions),
            this.jwtService.signAsync(payload, refreshTokenOptions),
        ]);

        const hashedRefreshToken = await this.hashToken(refreshToken);
        user.refreshToken = hashedRefreshToken;
        await this.usersService.updateHashedRefreshToken(
            user,
            hashedRefreshToken,
        );

        return {
            accessToken: accessToken,
            tokenType: 'Bearer',
            expiresIn: this.jwtConstants.expiresIn(),
            issuedAt: new Date(),
            expiresOn: new Date(
                Date.now() + this.jwtConstants.expiresIn() * 1000,
            ),
            refreshToken: refreshToken,
            refreshExpiresIn: this.jwtConstants.refreshExpiresIn(),
            refreshExpiresOn: new Date(
                Date.now() + this.jwtConstants.refreshExpiresIn() * 1000,
            ),
        } as TokensDto;
    }

    async refreshTokens(
        userId: string,
        refreshToken: string,
    ): Promise<TokensDto> {
        if (!userId || !refreshToken)
            throw new UnauthorizedException('Invalid credentials');

        const user = await this.usersService.findOne(userId);
        if (!user) throw new UnauthorizedException('User not found');

        const isValid = await bcrypt.compare(refreshToken, user.refreshToken);
        if (!isValid) throw new UnauthorizedException('Invalid refresh token');

        const newTokens = await this.generateTokens(user);
        return newTokens;
    }
}
