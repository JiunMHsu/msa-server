import {
    Body,
    Controller,
    HttpCode,
    Post,
    Res,
    UseGuards,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { TokensDto, AccessTokenDto } from './dto/tokens.dto';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from '@commons/decorators/current-user.decorator';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly configService: ConfigService,
    ) {}

    @HttpCode(200)
    @Post('login')
    async login(
        @Body() loginDto: LoginDto,
        @Res() res: Response,
    ): Promise<void> {
        const user = await this.authService.authenticate(loginDto);
        const tokens = await this.authService.generateTokens(user);

        this.setTokenResponseHeaders(res, tokens);
        res.json(AccessTokenDto.fromTokensDto(tokens));
    }

    @UseGuards(AuthGuard('jwt-refresh'))
    @Post('refresh')
    async refreshTokens(
        @CurrentUser('id') userId: string,
        @CurrentUser('refreshToken') refreshToken: string, // refresh token from the cookie (unhashed)
        @Res() res: Response,
    ): Promise<void> {
        const tokens = await this.authService.refreshTokens(
            userId,
            refreshToken,
        );

        this.setTokenResponseHeaders(res, tokens);
        res.json(AccessTokenDto.fromTokensDto(tokens));
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('logout')
    async logout(): Promise<void> {}

    private setTokenResponseHeaders(res: Response, tokens: TokensDto): void {
        res.cookie('refresh_token', tokens.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: '/api/auth/refresh',
            maxAge: tokens.refreshExpiresIn,
        });

        res.setHeader(
            'Access-Control-Allow-Origin',
            `${this.configService.get<string>('domain')}`,
        );
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Cache-Control', 'no-store');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Content-Type', 'application/json');
    }
}
