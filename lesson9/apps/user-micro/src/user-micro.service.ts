import { Injectable } from '@nestjs/common';

@Injectable()
export class UserMicroService {
  getHello(): string {
    return 'User! Hello World!';
  }
}
