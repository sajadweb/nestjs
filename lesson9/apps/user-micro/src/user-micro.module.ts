import { Module } from '@nestjs/common';
import { UserMicroController } from './user-micro.controller';
import { UserMicroService } from './user-micro.service';
import { MongoConfigAsync, getEnvironments } from '@libs/common';

@Module({
  imports: [getEnvironments('.env'), MongoConfigAsync],
  controllers: [UserMicroController],
  providers: [UserMicroService],
})
export class UserMicroModule {}
