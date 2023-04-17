import { type } from 'os';
import { Typeuser } from 'src/typeusers/entities/typeuser.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  firstname: string;

  @Column({ length: 250 })
  lastname: string;

  @Column({ length: 250, unique: true })
  email: string;

  @Column('text')
  password: string;

  @ManyToOne((type) => Typeuser, (role) => role.id)
  @JoinColumn({ name: 'type' })
  type: Typeuser;

  @Column({ nullable: true })
  refreshtoken: string;

  @Column({ nullable: true })
  refreshtokenexpires: string;
}
