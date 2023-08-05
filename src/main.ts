import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.enableCors();
  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useWebSocketAdapter(new IoAdapter(app));
  // app.useWebSocketAdapter(new CustomAdapter());
  app.useStaticAssets(join(__dirname, '../uploads'));
  const config = new DocumentBuilder()
    .setTitle('HIBO_FOODS')
    .setDescription('The Hibo_foods API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(5000);
}
bootstrap();