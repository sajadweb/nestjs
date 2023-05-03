import { Transport } from '@nestjs/microservices';
export const PostMicroConfig: any = () => {
  return {
    transport: Transport.REDIS,
    options: {
      url: parseInt(process.env.POST_MICRO),
    },
  };
};
