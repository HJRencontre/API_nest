import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post()
  create(@Body() user: User) {
    return this.service.createUser(user);
  }

  @UseGuards(AuthGuard('jwt'))
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

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') user: User) {
    return this.service.deleteUser(user);
  }
}
