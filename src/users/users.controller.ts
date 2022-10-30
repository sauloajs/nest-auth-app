import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { checkHash, generateHashString } from 'src/utils/hash';
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

    this.usersService.create({
      ...createUserDto,
      password,
      username: createUserDto.email,
    });
  }

  @Post('check')
  async Check(@Body() body) {
    const isMatch = await checkHash({
      str: body.password,
      hash: '$2b$08$40AyAJCA7nS8fgU5a1MZG.cHFUA.a7gbjCoP79Ukoq8xI.5aLl/lu',
    });
    return isMatch;
  }
}
