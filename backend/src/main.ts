import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {

  // Create app
  const app = await NestFactory.create(AppModule);

  // CORS
  const options = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials":true
  }
  //app.use(cors(options))
  app.enableCors(options)



  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Premium Swap API')
    .setDescription('API for Premium Swap App')
    .setVersion('1.0')
    .addTag('sequelize')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Start server
  await app.listen(9008);
  console.log(`Application is running on: http://localhost:9008`);
}
bootstrap();
