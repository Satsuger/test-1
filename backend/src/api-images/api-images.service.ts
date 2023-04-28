import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Image } from '../images/entities/image.entity';

@Injectable()
export class ApiImagesService {
  constructor(private readonly httpService: HttpService) {}

  private readonly imagesUrl =
    'https://my-json-server.typicode.com/icedrone/json-demo-server/images';

  async findAll(): Promise<Image[]> {
    const response = await firstValueFrom(this.httpService.get(this.imagesUrl));

    return response.data[0].map(({ albumId, id, title, path }) => {
      return {
        id,
        uuid: `${id}-${albumId}`,
        albumId,
        title,
        url: path,
        thumbnailUrl: undefined,
      };
    });
  }
}
