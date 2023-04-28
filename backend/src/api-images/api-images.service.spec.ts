import { Test, TestingModule } from '@nestjs/testing';
import { ApiImagesService } from './api-images.service';

describe('ApiImagesService', () => {
  let service: ApiImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiImagesService],
    }).compile();

    service = module.get<ApiImagesService>(ApiImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
