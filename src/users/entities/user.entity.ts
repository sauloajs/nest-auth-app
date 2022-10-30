import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;
}
