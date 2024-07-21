import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { JokeTypesService } from '../services/joke-types.service';
import { CreateJokeTypeDto } from '../dtos/CreateJokeType.dto';
import { UpdateJokeTypeDto } from '../dtos/UpdateJokeType.dto';

@Controller('joke-types')
export class JokeTypesController {
  constructor(private jokeTypeService: JokeTypesService) {}

  @Get()
  getAllJokeTypes() {
    return this.jokeTypeService.findAllJokeTypes();
  }

  @Get(':id')
  getJokeTypeById(@Param('id') id: number) {
    return this.jokeTypeService.findJokeTypeById(id);
  }

  @Post()
  createJokeType(@Body() jokeType: CreateJokeTypeDto) {
    return this.jokeTypeService.createJokeType(jokeType);
  }

  @Patch(':id')
  async updateJokeType(
    @Param('id', ParseIntPipe) id: number,
    @Body() jokeType: UpdateJokeTypeDto,
  ) {
    await this.jokeTypeService.updateJokeType(id, jokeType);
  }

  @Delete(':id')
  async deleteJokeType(@Param('id', ParseIntPipe) id: number) {
    await this.jokeTypeService.deleteJokeType(id);
  }
}
