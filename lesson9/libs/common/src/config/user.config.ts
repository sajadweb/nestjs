import { Transport } from '@nestjs/microservices';
export const UserMicroConfig: any = () => {
  return {
    transport: Transport.TCP,
    options: {
      host: process.env.USER_HOST_MICRO,
      port: parseInt(process.env.USER_PORT_MICRO),
    },
  };
};
