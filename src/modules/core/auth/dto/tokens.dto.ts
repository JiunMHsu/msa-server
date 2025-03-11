export class TokensDto {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    issuedAt: Date;
    expiresOn: Date;
    refreshToken: string;
    refreshExpiresIn: number;
    refreshExpiresOn: Date;
}

export class AccessTokenDto {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    issuedAt: Date;
    expiresOn: Date;

    static fromTokensDto(tokens: TokensDto): AccessTokenDto {
        return {
            accessToken: tokens.accessToken,
            tokenType: tokens.tokenType,
            expiresIn: tokens.expiresIn,
            issuedAt: tokens.issuedAt,
            expiresOn: tokens.expiresOn,
        };
    }
}
