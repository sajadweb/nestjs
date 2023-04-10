import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: false, example: 'sajjad' })
  name: string;
  @ApiProperty({ example: 'sajadweb7@gmail.com' })
  email: string;
  @ApiProperty({ example: 'sajjad' })
  username: string;
  @ApiProperty({ example: 'sajjad' })
  password: string;
}
export class LoginUserDto {
  @ApiProperty({ example: 'hadi6@gmail.com' })
  email: string;
  @ApiProperty({ example: 'hadi2' })
  password: string;
}
