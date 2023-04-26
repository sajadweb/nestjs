import { ConfigModule } from '@nestjs/config';

export const getEnvironments = (path = '.env') => {
  return ConfigModule.forRoot({
    envFilePath: [path],
    isGlobal: true,
  });
};
