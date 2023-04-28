import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ApiImagesService } from '../api-images/api-images.service';
import { ApiPhotosService } from '../api-photos/api-photos.service';
import { Image } from './entities/image.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
    private readonly apiImagesService: ApiImagesService,
    private readonly apiPhotosService: ApiPhotosService,
  ) {}

  async create(createImageDto: CreateImageDto): Promise<Image> {
    const newImage = await this.imageRepository.save(createImageDto);
    newImage.uuid = `${newImage.id}-db`;
    await this.imageRepository.save(newImage);

    return newImage;
  }

  async findAll(): Promise<Image[]> {
    const [images, photos, dbImages] = await Promise.all([
      this.apiImagesService.findAll(),
      this.apiPhotosService.findAll(),
      this.imageRepository.find(),
    ]);

    const allImages: Image[] = [...images, ...photos, ...dbImages];

    return allImages;
  }

  async findOne(id: string): Promise<Image> {
    /* Would be great to have findOne method in both services and just use these method
    insted of finding all images and filtering */

    if (id.includes('-db'))
      return this.imageRepository.findOne({ where: { uuid: id } });

    const allImages = await this.findAll();

    return allImages.find((image) => image.uuid === id);
  }

  async update(id: string, updateImageDto: UpdateImageDto) {
    if (!id.includes('-db')) {
      throw new BadRequestException(`There isn't any user with id: ${id}`);
    }

    const image = await this.imageRepository.findOne({ where: { uuid: id } });

    this.imageRepository.merge(image, updateImageDto);

    return this.imageRepository.save(image);
  }

  remove(id: string) {
    if (!id.includes('-db')) {
      throw new BadRequestException(`There isn't any user with id: ${id}`);
    }

    return this.imageRepository.delete({ uuid: id });
  }
}
