import { Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { BadRequestException } from '@nestjs/common';
import { CreateImageDto } from '../dto/create-image.dto';

@Injectable()
export class CreateImageValidationPipe implements PipeTransform {
  async transform(value: any) {
    const createImageDto = plainToClass(CreateImageDto, value);
    const errors = await validate(createImageDto);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    return createImageDto;
  }
}
