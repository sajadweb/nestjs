import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private users: Model<UserDocument>,
  ) {}
  async login(loginBody: LoginUserDto) {
    const user = await this.users
      .findOne({
        email: loginBody?.email,
      })
      .select({ password: 1, name: 1, email: 1, username: 1, createdAt: 1 })
      // .select('password name _id email')
      .exec();
    if (!user) {
      throw new BadRequestException('Opps! user not found :)');
    }
    const data = user.toObject();
    const check = await this.compare(loginBody.password, data.password);
    if (check) {
      delete data.password;
      return data;
    }
    throw new BadRequestException('Opps! password not valid :)');
  }
  async create(createUserDto: CreateUserDto, ip: string, device: any) {
    try {
      // this.users.push(new User(createUserDto));
      const password = this.hashSync(createUserDto.password);
      console.log(password);
      delete createUserDto.password;
      const model = new this.users({ ip, device, ...createUserDto, password });
      const user = await model.save();
      return { ...user.toObject() };
    } catch (error) {
      return error?.message || 'Opps! server error....';
    }
  }

  findAll() {
    return (
      this.users
        .find()
        .select({ name: 1, email: 1, username: 1, createdAt: 1 })
        // .select('password name _id email')
        .exec()
    );
  }

  async findOne(id: any) {
    const user = await this.users.findById(id);
    if (!user) {
      throw new BadRequestException('Opps! user not found :)');
    }
    return user;
  }

  update(id: any, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: any) {
    return this.users.deleteOne({ _id: id });
  }

  hash(password: string): Promise<string> {
    return bcrypt.hash(password, Number(process.env.HASH_SALT));
  }
  hashSync(password: string): string {
    return bcrypt.hashSync(password, Number(process.env.HASH_SALT));
  }
  async compare(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}
