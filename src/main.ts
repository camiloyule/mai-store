import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // only allow whitelisted properties on request object
    forbidNonWhitelisted: true, // don't allow non-whitelisted properties on request object
  }));
  await app.listen(3000);
}
bootstrap();
