import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { MongoConfigAsync } from './mongo-db';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/restapi'),
    MongoConfigAsync,
    UserModule,
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
