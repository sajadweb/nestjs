import { Module } from '@nestjs/common';
import { PostMicroController } from './post-micro.controller';
import { PostMicroService } from './post-micro.service';
import { MongoConfigAsync, getEnvironments } from '@libs/common';

@Module({
  imports: [getEnvironments('.env'), MongoConfigAsync],
  controllers: [PostMicroController],
  providers: [PostMicroService],
})
export class PostMicroModule {}
