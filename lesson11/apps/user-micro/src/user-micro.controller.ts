import { Controller, Get } from '@nestjs/common';
import { UserMicroService } from './user-micro.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class UserMicroController {
  constructor(private readonly userMicroService: UserMicroService) {}
  @MessagePattern('get.hello')
  getHello(@Payload() payload: any): string {
    return this.userMicroService.getHello(payload);
  }
  @MessagePattern('find.all')
  findAll(@Payload() payload: any) {
    return this.userMicroService.findAll();
  }
  @MessagePattern('create.user')
  createUser(@Payload() payload: any) {
    return this.userMicroService.create(payload);
  }
  @MessagePattern('login')
  login(@Payload() payload: any) {
    return this.userMicroService.login(payload);
  }
}
