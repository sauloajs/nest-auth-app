import { Body, Controller, Post } from '@nestjs/common';
import { generateHashString } from 'src/utils/hash';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async Register(@Body() createUserDto: CreateUserDto) {
    const password = await generateHashString({
      str: createUserDto.password,
    });

    createUserDto.password = password;

    this.usersService.create(createUserDto);
  }
}
