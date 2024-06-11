import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from './auth.model';
import { MailerService } from 'src/mailer/mailer.service';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
  imports: [SequelizeModule.forFeature([User]), MailerModule],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
