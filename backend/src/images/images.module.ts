import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { HttpModule } from '@nestjs/axios';
import { ApiImagesModule } from '../api-images/api-images.module';
import { ApiPhotosModule } from '../api-photos/api-photos.module';
import { ApiImagesService } from '../api-images/api-images.service';
import { ApiPhotosService } from '../api-photos/api-photos.service';

@Module({
  imports: [HttpModule, ApiImagesModule, ApiPhotosModule],
  controllers: [ImagesController],
  providers: [ImagesService, ApiImagesService, ApiPhotosService],
})
export class ImagesModule {}
