import { Test, TestingModule } from '@nestjs/testing';
import { TypeusersController } from './typeusers.controller';
import { TypeusersService } from './typeusers.service';

describe('TypeusersController', () => {
  let controller: TypeusersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeusersController],
      providers: [TypeusersService],
    }).compile();

    controller = module.get<TypeusersController>(TypeusersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
