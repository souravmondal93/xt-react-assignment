import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import configurations from './config/configurations';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { generateUniqueCustomerId } from './middlewares';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const mongoUrl = configService.get('MONGO_URL');

        return {
          uri: mongoUrl,
        };
      },
      inject: [ConfigService],
    }),
    ProductsModule,
    CartsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(generateUniqueCustomerId)
      .forRoutes(
        { path: 'products', method: RequestMethod.GET },
        { path: 'carts', method: RequestMethod.GET },
      );
  }
}
