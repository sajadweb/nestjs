import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { PostMicroConfig } from '@libs/common';

@Module({
  controllers: [PostController],
  providers: [
    PostService,
    {
      provide: 'PostProxyService',
      inject: [ConfigService],
      useFactory: async () => {
        return ClientProxyFactory.create(PostMicroConfig());
      },
    },
  ],
})
export class PostModule {}
