import { Module } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { SequelizeModule } from '@nestjs/sequelize';

import { Subscriptions } from './subscription.model';
@Module({
  imports: [SequelizeModule.forFeature([Subscriptions])],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
  exports: [SubscriptionService],
})
export class SubscriptionModule {}
