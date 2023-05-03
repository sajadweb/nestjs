import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

export const MongoConfigAsync = MongooseModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.getOrThrow<string>('DB'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),
});
