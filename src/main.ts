import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Pipe: similar to middleWares.
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true, // If there are any field that are not allowed, tell'em.
    transform: true,  // transforms the type automatically - movieId can be a number instead of string.
  }))
  await app.listen(3000);
}
bootstrap();
