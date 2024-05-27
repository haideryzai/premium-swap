import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';

// dtos
import { SubscriptionDTO } from './dtos/subscription.dto';

// models
import { Subscriptions } from './subscription.model';

// utils
import { successResponse } from 'src/utils/responsesUtil';
@Injectable()
export class SubscriptionService {
    constructor(
        @InjectModel(Subscriptions)
        private SubscriptionsModel: typeof Subscriptions,
    ) {}

    public async createSubscription(SubscriptionDTO: SubscriptionDTO) {
        try {
            const subscription = await this.SubscriptionsModel.create(SubscriptionDTO);
            return successResponse({ subscription }, 'Subscription created successfully');
        } catch (error) {
            return error;
        }
    }

    public async getAllSubscriptions() {
        try {
            const subscriptions = await this.SubscriptionsModel.findAll();
            return successResponse({ subscriptions }, 'Subscriptions fetched successfully');
        } catch (error) {
            return error;
        }
    }

    public async getSubscriptionById(id: number) {
        try {
            const subscription = await this.SubscriptionsModel.findOne({ where: { id } });
            return successResponse({ subscription }, 'Subscription fetched successfully');
        } catch (error) {
            return error;
        }
    }

    public async updateSubscriptionById(id: number, SubscriptionDTO: SubscriptionDTO) {
        try {
            const subscription = await this.SubscriptionsModel.update(SubscriptionDTO, { where: { id } });
            return successResponse({ subscription }, 'Subscription updated successfully');
        } catch (error) {
            return error;
        }
    }

    public async deleteSubscriptionById(id: number) {
        try {
            const subscription = await this.SubscriptionsModel.destroy({ where: { id } });
            return successResponse({ subscription }, 'Subscription deleted successfully');
        } catch (error) {
            return error;
        }
    }
}
