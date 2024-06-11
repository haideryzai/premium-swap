import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Module({
  controllers: [],
  exports: [MailerService],
  providers: [MailerService]
})
export class MailerModule {}
