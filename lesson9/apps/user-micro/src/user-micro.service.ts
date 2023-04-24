import { Injectable } from '@nestjs/common';

@Injectable()
export class UserMicroService {
  getHello(payload: any): string {
    return `Hi ${payload?.name}! Hello World!`;
  }
}
