import { NestFactory } from '@nestjs/core';
import { PostMicroModule } from './post-micro.module';

async function bootstrap() {
  const app = await NestFactory.create(PostMicroModule);
  await app.listen(process.env.PORT);
  console.log(`Post Micro start in url ${await app.getUrl()}`);
}
bootstrap();
