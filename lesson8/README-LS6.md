1. install mongodb

```sh
npm install --save @nestjs/mongoose mongoose
```

2. used in app module
1. forRoot

```ts
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'restapi' }),
  ],
})
export class AppModule {}
```

2. forRootAsync

```ts
import { MongooseModule } from '@nestjs/mongoose';
export const MongoConfigAsync = MongooseModule.forRootAsync({
  useFactory: async () => ({
    uri: 'mongodb://127.0.0.1:27017/restapi',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),
});
```

3. Schema in User

```ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class User {
  @Prop({ required: false, index: false, unique: false })
  name: string;
  @Prop({ required: true, index: true, unique: true })
  email: string;
  @Prop({ required: true, index: true, unique: true })
  username: string;
  @Prop({ required: true, index: false, unique: false })
  password: string;
  @Prop({ default: null, type: mongoose.Schema.Types.Mixed })
  device: object;
}

export const UserSchema = SchemaFactory.createForClass(User);
```

4. user Module

```ts
@Module({
  imports: [MongooseModule.forFeature([UserFeature])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
```

5. user service

```ts
constructor(
  @InjectModel(User.name)
  private users: Model<UserDocument>,
) {}
```

## Decorator

```sh
nest -h
nest g d IpParam
```

#### crate

```ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
export const IpParam = createParamDecorator<unknown, ExecutionContext>(
  async (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<any>();
    return req.ip;
  },
);
```

#### use

```ts
import { IpParam } from '../decorators';

  @Post()
  create(@Body() createUserDto: CreateUserDto, @IpParam() ip: string) {
    return this.userService.create(createUserDto, ip);
  }


```

## device
https://www.npmjs.com/package/device-detector-js
```sh
npm i device-detector-js
```

```ts

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
      return device;
    } catch (error) {
      return null;
    }
  },
);

```
```ts
import { DeviceParam } from '../decorators';

  @Post()
  create(@Body() createUserDto: CreateUserDto, @DeviceParam() device: any) {
    return this.userService.create(createUserDto, device);
  }

```

## home work
1. decorator then header  @HeaderParam()
```ts
 @HeaderParam() headers:any
 @HeaderParam('user-agent') UserAgent:string
```
2. crate Post  find crate update delete 
