import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'joke_types' })
export class JokeType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
