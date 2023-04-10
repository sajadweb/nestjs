import { Injectable } from '@nestjs/common';

@Injectable()
export class PostMicroService {
  getHello(): string {
    return 'Post! Hello World!';
  }
}
