import { Module } from '@nestjs/common';
import { JokesController } from './controllers/jokes.controller';
import { JokesService } from './services/jokes.service';
import { Joke } from './entities/Joke';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Joke])],
  controllers: [JokesController],
  providers: [JokesService],
})
export class JokesModule {}
