import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan'
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)
  const port = configService.get('PORT')

  app.use(morgan('dev'))

  app.enableCors(CORS)

  app.setGlobalPrefix('api')

  await app.listen(port || '8080');

  console.log(`App running in PORT : ${port || '8080'}`);
  
}
bootstrap();
