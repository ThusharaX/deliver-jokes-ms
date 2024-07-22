import { Injectable } from '@nestjs/common';
import { Joke } from '../entities/Joke';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJokeParams, UpdateJokeParams } from 'src/utils/types';

@Injectable()
export class JokesService {
  constructor(
    @InjectRepository(Joke) private usersRepository: Repository<Joke>,
  ) {}

  async findRandomJoke(type: string) {
    const randomJoke = await this.usersRepository
      .createQueryBuilder()
      .where('type = :type', { type })
      .orderBy('RAND()')
      .getOne();
    return randomJoke;
  }

  findAllJokes() {
    return this.usersRepository.find();
  }

  findJokeById(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  createJoke(joke: CreateJokeParams) {
    const newJoke = this.usersRepository.create(joke);
    return this.usersRepository.save(newJoke);
  }

  updateJoke(id: number, joke: UpdateJokeParams) {
    return this.usersRepository.update(id, joke);
  }

  deleteJoke(id: number) {
    return this.usersRepository.delete(id);
  }
}
