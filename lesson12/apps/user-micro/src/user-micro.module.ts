import { Module } from '@nestjs/common';
import { UserMicroController } from './user-micro.controller';
import { UserMicroService } from './user-micro.service';
import {
  BullConfigAsync,
  MongoConfigAsync,
  getEnvironments,
} from '@libs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserFeature } from '@libs/schema';
import { BullModule } from '@nestjs/bull';
import { EmailProcessor } from './queue/email.processor';
import { EmailEmiter } from './queue/email.emit';
import { EmailQueueEnum } from './queue/email.enum';

@Module({
  imports: [
    getEnvironments('.env'),
    MongoConfigAsync,
    MongooseModule.forFeature([UserFeature]),
    BullModule.registerQueueAsync({
      ...BullConfigAsync,
      name: EmailQueueEnum.NAME,
    }),
  ],
  controllers: [UserMicroController],
  providers: [UserMicroService, EmailProcessor, EmailEmiter],
})
export class UserMicroModule {}
