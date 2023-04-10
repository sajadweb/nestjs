import { Test, TestingModule } from '@nestjs/testing';
import { UserMicroController } from './user-micro.controller';
import { UserMicroService } from './user-micro.service';

describe('UserMicroController', () => {
  let userMicroController: UserMicroController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserMicroController],
      providers: [UserMicroService],
    }).compile();

    userMicroController = app.get<UserMicroController>(UserMicroController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userMicroController.getHello()).toBe('Hello World!');
    });
  });
});
