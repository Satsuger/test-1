import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ApiPhotosService } from './api-photos.service';

@Module({
  imports: [HttpModule],
  providers: [ApiPhotosService],
  exports: [ApiPhotosService],
})
export class ApiPhotosModule {}
