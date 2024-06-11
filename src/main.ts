import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // only allow whitelisted properties on request object
    forbidNonWhitelisted: true, // don't allow non-whitelisted properties on request object
  }));

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('MAI STORE')
    .setVersion('1.0')
    .addTag('cats')
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
