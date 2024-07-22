import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { JokesService } from '../services/jokes.service';
import { CreateJokeDto } from '../dtos/CreateJoke.dto';
import { UpdateJokeDto } from '../dtos/UpdateJoke.dto';

@Controller('jokes')
export class JokesController {
  constructor(private jokeService: JokesService) {}

  // get a random joke
  @Get('random')
  getRandomJoke(@Query('type') type: string) {
    return this.jokeService.findRandomJoke(type);
  }

  @Get()
  getAllJokes() {
    return this.jokeService.findAllJokes();
  }

  @Get(':id')
  getJokeById(@Param('id') id: number) {
    return this.jokeService.findJokeById(id);
  }

  @Post()
  createJoke(@Body() joke: CreateJokeDto) {
    return this.jokeService.createJoke(joke);
  }

  @Patch(':id')
  async updateJoke(
    @Param('id', ParseIntPipe) id: number,
    @Body() joke: UpdateJokeDto,
  ) {
    await this.jokeService.updateJoke(id, joke);
  }

  @Delete(':id')
  async deleteJoke(@Param('id', ParseIntPipe) id: number) {
    await this.jokeService.deleteJoke(id);
  }
}
