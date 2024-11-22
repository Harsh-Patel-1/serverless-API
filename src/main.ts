import * as dotenv from 'dotenv';
dotenv.config();
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Use global validation pipes to validate incoming requests
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip out properties not defined in DTOs
      forbidNonWhitelisted: true, // Reject requests with extra properties
      transform: true, // Automatically transform payloads to DTO instances
    }),
  );

  // Start the application
  const port = process.env.PORT;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
