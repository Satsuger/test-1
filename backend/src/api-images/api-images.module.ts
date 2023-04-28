import { Module } from '@nestjs/common';
import { ApiImagesService } from './api-images.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ApiImagesService],
  exports: [ApiImagesService],
})
export class ApiImagesModule {}
