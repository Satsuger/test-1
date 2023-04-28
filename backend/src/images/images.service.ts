import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ApiImagesService } from '../api-images/api-images.service';
import { ApiPhotosService } from '../api-photos/api-photos.service';
import { Image } from './entities/image.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ImagesService {
  constructor(
    private readonly apiImagesService: ApiImagesService,
    private readonly apiPhotosService: ApiPhotosService,
  ) {}

  private readonly DB = {
    images: [] as Image[],
  };

  async create(createImageDto: CreateImageDto): Promise<Image> {
    const newImage = new Image({
      id: uuid(),
      albumId: createImageDto.albumId,
      title: createImageDto.title,
      url: createImageDto.url,
      thumbnailUrl: createImageDto.thumbnailUrl,
    });

    this.DB.images.push(newImage);

    return newImage;
  }

  async findAll(): Promise<Image[]> {
    const apiImages = this.apiImagesService.findAll();
    const apiPhotos = this.apiPhotosService.findAll();

    const [images, photos] = await Promise.all([apiImages, apiPhotos]);

    const allImages: Image[] = [...images, ...photos, ...this.DB.images];

    return allImages;
  }

  async findOne(id: number): Promise<Image[]> {
    /* Would be great to have findOne method in both services and just use these method
    insted of finding all images and filtering */

    const allImages = await this.findAll();

    return allImages.filter((image) => image.id === id);
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
