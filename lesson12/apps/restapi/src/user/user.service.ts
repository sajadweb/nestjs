import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class UserService {
  constructor(@Inject('UserProxyService') private userMicro: ClientProxy) {}

  async callUserMicro(pattern: any, data: any) {
    try {
      return lastValueFrom(
        this.userMicro.send(pattern, data).pipe(
          map((res) => {
            return res;
          }),
        ),
      );
    } catch (error) {
      return 'Error';
    }
  }
  async login(loginBody: LoginUserDto) {
    return await this.callUserMicro('login', loginBody);
  }
  async create(createUserDto: CreateUserDto, ip: string, device: any) {
    return await this.callUserMicro('create.user', {
      ip,
      device,
      createUserDto,
    });
  }

  findAll() {
    return this.callUserMicro('find.all', {});
  }

  async getHello() {
    return this.callUserMicro('get.hello', { name: 'user micro' });
  }
  async pingCheck() {
    try {
      await this.userMicro.connect();
      return 'ok';
    } catch (error) {
      console.log(error);
      return 'Error';
    }
  }
  async findOne(id: any) {
    return this.callUserMicro('get.hello', { name: 'user micro' });
  }

  update(id: any, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: any) {
    return this.callUserMicro('get.hello', { name: 'user micro' });
  }
}
