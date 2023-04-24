import { NestFactory } from '@nestjs/core';
import { UserMicroModule } from './user-micro.module';
import { UserMicroConfig } from '@libs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    UserMicroModule,
    UserMicroConfig(),
  );
  await app.listen();
  console.log(`User Micro start in url ${process.env.USER_PORT_MICRO}`);
}
bootstrap();
