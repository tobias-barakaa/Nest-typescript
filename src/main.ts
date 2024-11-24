import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true
    }
  });

  // swagger configuration

  const config = new DocumentBuilder()
  .setTitle('NestJS Intro')
  .setDescription('The NestJS Intro API description')
  .setTermsOfService('https://www.google.com/policies/terms/')
  .setLicense('MIT', 'https://opensource.org/licenses/MIT')
  .addServer('http://localhost:4000')
  .setBasePath('api')
  .setVersion('1.0');
  const document = SwaggerModule.createDocument(app, config.build());
  SwaggerModule.setup('api', app, document);
  await app.listen(4000);
}
bootstrap();
