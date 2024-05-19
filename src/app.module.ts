import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeConfig } from './config/sequelize.config';
import { UserModule } from './user/user.module';
import { Sequelize } from 'sequelize-typescript';
@Module({
  imports: [SequelizeModule.forRoot(sequelizeConfig), UserModule],
  controllers: [AppController],
  providers: [AppService],
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
