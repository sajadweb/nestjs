import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { EmailQueueEnum } from './email.enum';
@Injectable()
export class EmailEmiter {
  constructor(
    @InjectQueue(EmailQueueEnum.NAME)
    private readonly queue: Queue,
  ) {}
  i = 0;
  async emitEmail(data: any): Promise<void> {
    try {
      let priority = 0;
      this.i = this.i + 1;
      if (this.i % 2 === 1) priority = 5;
      else priority = 20;
      console.log(priority);
      const job = await this.queue.add(EmailQueueEnum.SEND_MAIL_QUEUE, data, {
        priority,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
