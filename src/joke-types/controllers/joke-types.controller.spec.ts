import { Test, TestingModule } from '@nestjs/testing';
import { JokeTypesController } from './joke-types.controller';

describe('JokeTypesController', () => {
  let controller: JokeTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JokeTypesController],
    }).compile();

    controller = module.get<JokeTypesController>(JokeTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
