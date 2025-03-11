import { UnauthorizedException } from '@nestjs/common';

export class UserNotFoundException extends Error {
    constructor() {
        super('User not found');
    }
}

export class InvalidPasswordException extends UnauthorizedException {
    constructor() {
        super('Invalid password');
    }
}
