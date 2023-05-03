import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class PostService {
  constructor(@Inject('PostProxyService') private client: ClientProxy) {}
  async getHello() {
    try {
      return lastValueFrom(
        this.client.send('get.hello', { name: 'post micro' }).pipe(
          map((res) => {
            return res;
          }),
        ),
      );
    } catch (error) {
      return 'Error';
    }
  }
  async pingCheck() {
    try {
      await this.client.connect();
      return 'ok';
    } catch (error) {
      console.log(error);
      return 'Error';
    }
  }
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
