import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('typeuser')
export class Typeuser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;
}
