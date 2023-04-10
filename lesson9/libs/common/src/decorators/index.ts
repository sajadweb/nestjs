import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as DeviceDetector from 'device-detector-js';

export const IpParam = createParamDecorator<unknown, ExecutionContext>(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<any>();
    console.log('req lin 6');
    return req.ip;
  },
);

export const DeviceParam = createParamDecorator<unknown, ExecutionContext>(
  async (data: string, ctx: ExecutionContext) => {
    try {
      const req = ctx.switchToHttp().getRequest<any>();
      const userAgent = req.headers['user-agent'];
      if (!userAgent) {
        return {};
      }
      const deviceDetector = new DeviceDetector();
      const device = deviceDetector.parse(userAgent);
      return device[data];
    } catch (error) {
      return null;
    }
  },
);
