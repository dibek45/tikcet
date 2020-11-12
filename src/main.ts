import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
var express = require('express');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(__dirname )
  app.enableCors();
  app.use('/images', express.static(__dirname + '/../src/images'));
  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
