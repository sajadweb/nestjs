import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { EmailQueueEnum } from './email.enum';

@Processor(EmailQueueEnum.NAME)
export class EmailProcessor {
  @Process(EmailQueueEnum.SEND_MAIL_QUEUE)
  async sendEmail(job: Job<any>) {
    console.log('EmailProcessor send email', job.id);
    await new Promise((resolve) => {
      setTimeout(() => resolve('ok'), 5000);
    });
    console.log('EmailProcessor send email', job.data);
  }
}
