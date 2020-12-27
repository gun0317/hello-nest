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
    //  e2e 테스팅 등에서 app을 새로 만들 때 미들웨어를 동일하게 넣어줘야 적용됨!
  }));
  await app.listen(3000);
}

bootstrap();
