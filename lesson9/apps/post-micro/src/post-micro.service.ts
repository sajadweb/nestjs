import { Injectable } from '@nestjs/common';

@Injectable()
export class PostMicroService {
  getHello(payload: any): string {
    return `'Post!hi ${payload.name} Hello World!'`;
  }
}
