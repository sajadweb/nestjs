import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { MongoConfigAsync, getEnvironments } from '@libs/common';

@Module({
  imports: [getEnvironments('.env'), MongoConfigAsync, UserModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
