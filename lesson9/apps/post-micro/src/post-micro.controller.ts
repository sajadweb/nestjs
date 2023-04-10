import { Controller, Get } from '@nestjs/common';
import { PostMicroService } from './post-micro.service';

@Controller()
export class PostMicroController {
  constructor(private readonly postMicroService: PostMicroService) {}

  @Get()
  getHello(): string {
    return this.postMicroService.getHello();
  }
}
