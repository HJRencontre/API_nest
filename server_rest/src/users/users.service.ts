import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Typeuser } from 'src/typeusers/entities/typeuser.entity';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private users: Repository<User>,
  ) {}

  async createUser(user: User) {
    if (user.password) {
      const password = user.password;
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(password, saltOrRounds);
      user.password = hash;
    }
    return await this.users.save(user);
  }

  async saveorupdateRefreshToken(
    refreshToken: string,
    id: string,
    refreshtokenexpires,
  ) {
    await this.users.update(id, {
      refreshtoken: refreshToken,
      refreshtokenexpires,
    });
  }

  async getUsers(): Promise<User[]> {
    return await this.users.find({ relations: { type: true } });
  }

  async findOne(username: string): Promise<User | undefined> {
    const users = await this.users.find({
      relations: { type: true },
      where: [{ email: username }],
    });
    if (users.length == 1) {
      return users[0];
    } else {
      return undefined;
    }
  }

  async getUser(id: number): Promise<User[]> {
    return await this.users.find({
      relations: { type: true },
      where: [{ id: id }],
    });
  }

  async updateUser(id: number, user: User) {
    if (user.password) {
      const password = user.password;
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(password, saltOrRounds);
      user.password = hash;
    }
    return this.users.update(id, user);
  }

  deleteUser(user: User) {
    return this.users.delete(user);
  }
}
