import { Test, TestingModule } from '@nestjs/testing';
import { ApiPhotosService } from './api-photos.service';

describe('ApiPhotosService', () => {
  let service: ApiPhotosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiPhotosService],
    }).compile();

    service = module.get<ApiPhotosService>(ApiPhotosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
