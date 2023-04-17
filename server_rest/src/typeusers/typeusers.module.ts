import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Typeuser } from './entities/typeuser.entity';
import { TypeusersController } from './typeusers.controller';
import { TypeusersService } from './typeusers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Typeuser])],
  controllers: [TypeusersController],
  providers: [TypeusersService],
})
export class TypeusersModule {}
