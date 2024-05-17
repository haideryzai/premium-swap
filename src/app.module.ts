import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
@Module({
  imports: [
    SequelizeModule.forRoot({
      autoLoadModels: true,
      synchronize: true,
      sync: { alter: true },
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME || 'haider',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME,
    }),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
