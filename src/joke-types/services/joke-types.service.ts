import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JokeType } from '../entities/JokeType';
import { Repository } from 'typeorm';
import { CreateJokeTypeParams, UpdateJokeTypeParams } from 'src/utils/types';

@Injectable()
export class JokeTypesService {
  constructor(
    @InjectRepository(JokeType) private usersRepository: Repository<JokeType>,
  ) {}

  findAllJokeTypes() {
    return this.usersRepository.find();
  }

  findJokeTypeById(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  createJokeType(jokeType: CreateJokeTypeParams) {
    const newJokeType = this.usersRepository.create(jokeType);
    return this.usersRepository.save(newJokeType);
  }

  updateJokeType(id: number, jokeType: UpdateJokeTypeParams) {
    return this.usersRepository.update(id, jokeType);
  }

  deleteJokeType(id: number) {
    return this.usersRepository.delete(id);
  }
}
