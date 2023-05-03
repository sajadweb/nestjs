import { PostMicroConfig } from '@libs/common';
import { NestFactory } from '@nestjs/core';
import { PostMicroModule } from './post-micro.module';
// import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    PostMicroModule,
    PostMicroConfig(),
  );
  // const app = await NestFactory.createMicroservice(PostMicroModule, {
  //   transport: Transport.REDIS,
  //   options: {
  //     url: parseInt(process.env.POST_MICRO),
  //   },
  // });
  await app.listen();
  console.log(`Post Micro start in redis ${process.env.POST_MICRO}`);
}
bootstrap();
