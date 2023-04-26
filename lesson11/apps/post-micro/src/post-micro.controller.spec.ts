import { Test, TestingModule } from '@nestjs/testing';
import { PostMicroController } from './post-micro.controller';
import { PostMicroService } from './post-micro.service';

describe('PostMicroController', () => {
  let postMicroController: PostMicroController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PostMicroController],
      providers: [PostMicroService],
    }).compile();

    postMicroController = app.get<PostMicroController>(PostMicroController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(postMicroController.getHello()).toBe('Hello World!');
    });
  });
});
