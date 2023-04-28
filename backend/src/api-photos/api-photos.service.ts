import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';
import { Image } from '../images/entities/image.entity';

@Injectable()
export class ApiPhotosService {
  constructor(private readonly httpService: HttpService) {}

  private readonly photosUrl =
    'https://my-json-server.typicode.com/icedrone/json-demo-server/photos';

  async findAll(): Promise<Image[]> {
    const response = await firstValueFrom(this.httpService.get(this.photosUrl));

    return response.data[0];
  }
}
