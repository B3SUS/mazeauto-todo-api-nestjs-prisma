import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:3000', 'http://postman', 'https://mazeauto-frontend-test-508n14ztg-b3sus-projects.vercel.app/'],
    methods: 'GET,POST, PATCH, DELETE',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
