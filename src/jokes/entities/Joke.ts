import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'jokes' })
export class Joke {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  setup: string;

  @Column()
  punchline: string;

  @Column()
  author: string;

  @Column()
  type: string;
}
