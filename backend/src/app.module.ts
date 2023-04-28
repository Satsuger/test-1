import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appConfig } from './config';
import { ImagesModule } from './images/images.module';
import { ApiPhotosModule } from './api-photos/api-photos.module';
import { ApiImagesModule } from './api-images/api-images.module';
import { typeOrmAsyncConfig } from './db-config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      isGlobal: true,
    }),
    ImagesModule,
    ApiPhotosModule,
    ApiImagesModule,
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
