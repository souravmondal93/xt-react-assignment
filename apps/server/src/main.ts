import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe, RequestMethod } from '@nestjs/common';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.use(
    cors({
      origin: 'http://localhost:3000',
      methods: 'GET, PUT, POST, DELETE',
      credentials: true,
    }),
  );

  const port = process.env.PORT || 4000;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port);
  });
}
bootstrap();
