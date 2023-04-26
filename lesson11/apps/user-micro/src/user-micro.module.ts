import { Module } from '@nestjs/common';
import { UserMicroController } from './user-micro.controller';
import { UserMicroService } from './user-micro.service';
import { MongoConfigAsync, getEnvironments } from '@libs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserFeature } from '@libs/schema';

@Module({
  imports: [
    getEnvironments('.env'),
    MongoConfigAsync,
    MongooseModule.forFeature([UserFeature]),
  ],
  controllers: [UserMicroController],
  providers: [UserMicroService],
})
export class UserMicroModule {}
