import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Typeuser } from './entities/typeuser.entity';
import { TypeusersService } from './typeusers.service';

@Controller('typeuser')
export class TypeusersController {
  constructor(private service: TypeusersService) {}

  @Post()
  create(@Body() typeUser: Typeuser) {
    return this.service.createTypeUser(typeUser);
  }

  @Get()
  findAll() {
    return this.service.getTypeUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.getTypeUser(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() typeUser: Typeuser) {
    return this.service.updateTypeUser(+id, typeUser);
  }

  @Delete(':id')
  remove(@Param('id') typeUser: Typeuser) {
    return this.service.deleteTypeUser(typeUser);
  }
}
