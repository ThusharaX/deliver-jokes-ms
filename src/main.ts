import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('deliver');
  app.enableCors({
    origin: [process.env.LOCAL_DOMAIN, process.env.PROD_DOMAIN],
  });

  const config = new DocumentBuilder()
    .setTitle('Deliver Jokes Microservice')
    .setDescription('The Deliver Jokes API documentation')
    .setVersion('1.0')
    .addTag('jokes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3003);
}
bootstrap();
