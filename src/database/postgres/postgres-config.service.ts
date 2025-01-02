import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) {}

    createTypeOrmOptions():
        | Promise<TypeOrmModuleOptions>
        | TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.configService.get<string>('database.host'),
            port: this.configService.get<number>('database.port'),
            username: this.configService.get<string>('database.username'),
            password: this.configService.get<string>('database.password'),
            database: this.configService.get<string>('database.name'),
            // entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
            // entities: [process.cwd() + '/dist/**/*.entity{.ts,.js}'],
            entities: ['dist/modules/*/entities/*.entity.js'],
            logging: true,
            synchronize: this.configService.get<boolean>('database.sync'),
        };
    }
}
