import { Test, TestingModule } from '@nestjs/testing';
import { JokeTypesService } from './joke-types.service';

describe('JokeTypesService', () => {
  let service: JokeTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JokeTypesService],
    }).compile();

    service = module.get<JokeTypesService>(JokeTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
