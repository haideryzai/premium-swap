import { Module, OnModuleInit } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { SequelizeModule } from '@nestjs/sequelize';

import { sequelizeConfig } from './config/orm.config';

import { AppController } from './app.controller';
import { AuthController } from './auth/auth.controller';

import { AppService } from './app.service';
import { MailerService } from './mailer/mailer.service';
import { AuthService } from './auth/auth.service';


import { AuthModule } from './auth/auth.module';
import { MailerModule } from './mailer/mailer.module';
import { SubscriptionModule } from './subscription/subscription.module';


// models
import { User } from './auth/auth.model';
import { Subscriptions } from './subscription/subscription.model'; 
@Module({
  imports: [
    SequelizeModule.forFeature([User, Subscriptions]),
    SequelizeModule.forRoot(sequelizeConfig),
    AuthModule,
    SubscriptionModule,
    MailerModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, MailerService],
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
