import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokesModule } from './jokes/jokes.module';
import { JokeTypesModule } from './joke-types/joke-types.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Joke } from './jokes/entities/Joke';
import { JokeType } from './joke-types/entities/JokeType';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_DB_HOST,
      port: parseInt(process.env.MYSQL_DB_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [Joke, JokeType],
      synchronize: false, // ! set to false in production
    }),
    JokesModule,
    JokeTypesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
