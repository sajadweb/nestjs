import { MessagePattern, Payload } from '@nestjs/microservices';
import { Controller, Get } from '@nestjs/common';
import { PostMicroService } from './post-micro.service';

@Controller()
export class PostMicroController {
  constructor(private readonly postMicroService: PostMicroService) {}

  @MessagePattern('get.hello')
  getHello(@Payload() payload: any): string {
    return this.postMicroService.getHello(payload);
  }
}
