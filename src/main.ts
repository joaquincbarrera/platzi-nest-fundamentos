import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'; // This line is added to use the validation pipe globally
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // This line is added to use the validation pipe globally // elimina los campos que vienen de mas en el request
      forbidNonWhitelisted: true, // This line is added to use the validation pipe globally // si viene un campo que no esta en el dto, retorna un error
    }),
  ); // This line is added to use the validation pipe globally
  await app.listen(3000);
}
bootstrap();
