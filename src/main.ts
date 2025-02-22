import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { cors } from '@commons/constants';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors(cors);
    app.setGlobalPrefix('api');

    const configService = app.get(ConfigService);

    const host = configService.get<string>('host', '127.0.0.1');
    const apiPort = configService.get<string>('port', '3000');

    const config = new DocumentBuilder()
        .setTitle('MSA API')
        .setDescription('Music Streaming Application API description')
        .setVersion('1.0')
        .build();
    SwaggerModule.setup('docs', app, () =>
        SwaggerModule.createDocument(app, config),
    );

    await app.listen(apiPort, host);

    const logger = app.get(Logger);
    logger.log(`Server running on http://${host}:${apiPort}`);
    logger.log(`See documentation on http://${host}:${apiPort}/docs`);
}

bootstrap().then();
