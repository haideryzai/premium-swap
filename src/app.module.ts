import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeConfig } from './config/orm.config';

import { Sequelize } from 'sequelize-typescript';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/auth.model';
@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    SequelizeModule.forRoot(sequelizeConfig),
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule implements OnModuleInit {
  constructor(private sequelize: Sequelize) {}

  async onModuleInit() {
    try {
      await this.sequelize.authenticate();
      console.log('db successfully connected');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}
