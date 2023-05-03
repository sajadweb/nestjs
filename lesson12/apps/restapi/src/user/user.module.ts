import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserFeature } from '@libs/schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { UserMicroConfig } from '@libs/common';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'UserProxyService',
      inject: [ConfigService],
      useFactory: async () => {
        return ClientProxyFactory.create(UserMicroConfig());
      },
    },
  ],
})
export class UserModule {}
