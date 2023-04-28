import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Image } from '../images/entities/image.entity';

@Injectable()
export class ApiPhotosService {
  constructor(private readonly httpService: HttpService) {}

  private readonly photosUrl =
    'https://my-json-server.typicode.com/icedrone/json-demo-server/photos';

  async findAll(): Promise<Image[]> {
    const response = await firstValueFrom(this.httpService.get(this.photosUrl));

    return response.data[0].map(({ albumId, id, title, url, thumbnailUrl }) => {
      return {
        id,
        uuid: `${id}-${albumId}`,
        albumId,
        title,
        url,
        thumbnailUrl,
      };
    });
  }
}
