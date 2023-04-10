import { Controller, Get } from '@nestjs/common';
import { UserMicroService } from './user-micro.service';

@Controller()
export class UserMicroController {
  constructor(private readonly userMicroService: UserMicroService) {}

  @Get()
  getHello(): string {
    return this.userMicroService.getHello();
  }
}
