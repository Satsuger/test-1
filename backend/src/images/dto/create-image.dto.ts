import { IsNumber, IsString, IsUrl, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateImageDto {
  @IsNumber()
  albumId: number;

  @IsString()
  title: string;

  @IsUrl()
  url: string;

  @IsUrl()
  @IsOptional()
  thumbnailUrl?: string;

  @Transform(({ value }) => undefined, { toClassOnly: true })
  id?: number;

  @Transform(({ value }) => undefined, { toClassOnly: true })
  uuid?: string;
}
