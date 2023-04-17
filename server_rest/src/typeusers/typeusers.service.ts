import { Injectable, Type } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Typeuser } from './entities/typeuser.entity';

@Injectable()
export class TypeusersService {
  constructor(
    @InjectRepository(Typeuser)
    private typeUsers: Repository<Typeuser>,
  ) {}

  async createTypeUser(typeUser: Typeuser) {
    return await this.typeUsers.save(typeUser);
  }

  async getTypeUsers(): Promise<Typeuser[]> {
    return await this.typeUsers.find();
  }

  async getTypeUser(id: number): Promise<Typeuser[]> {
    return await this.typeUsers.find({
      where: [{ id: id }],
    });
  }

  updateTypeUser(id: number, typeUser: Typeuser) {
    return this.typeUsers.update(id, typeUser);
  }

  deleteTypeUser(typeUser: Typeuser) {
    return this.typeUsers.delete(typeUser);
  }
}
