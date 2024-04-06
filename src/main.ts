import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });

  app.use(helmet());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  app.enableCors({
    origin: process.env.CORS_DOMAINS.split(',').map((domain: string) =>
      domain.trim(),
    ),
    methods: ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST'],
    credentials: true,
  });

  await app.listen(3000);
}

bootstrap();
