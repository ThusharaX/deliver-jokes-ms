import { Module } from '@nestjs/common';
import { JokeTypesService } from './services/joke-types.service';
import { JokeTypesController } from './controllers/joke-types.controller';
import { JokeType } from './entities/JokeType';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([JokeType])],
  controllers: [JokeTypesController],
  providers: [JokeTypesService],
})
export class JokeTypesModule {}
