import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post()
  create(@Body() user: User) {
    return this.service.createUser(user);
  }

  @Get()
  findAll() {
    return this.service.getUsers();
  }

  @Get(':id')
  findUser(@Param('id') id: string) {
    return this.service.getUser(+id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.service.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: User) {
    return this.service.updateUser(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') user: User) {
    return this.service.deleteUser(user);
  }
}
