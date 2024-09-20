import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Глобальный пайп для валидации
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Убирает все поля, которых нет в DTO
      forbidNonWhitelisted: true, // Блокирует запросы с лишними полями
      transform: true, // Преобразует входящие данные к нужному типу
      errorHttpStatusCode: 400, // Возвращает 400 при ошибке валидации
    }),
  );
  await app.listen(3000, () => console.log(`Server started localhost:${3000}`));
}
bootstrap();
