import { Body, Controller, Delete, Get, Post } from '@nestjs/common';

// dtos
import { SubscriptionDTO } from './dtos/subscription.dto';

// services
import { SubscriptionService } from './subscription.service';
@Controller('api/subscriptions')
export class SubscriptionController {
    constructor(
        private subscriptionService: SubscriptionService
    ) {}

    @Post('create')
    public async createSubscription(@Body() SubscriptionDTO: SubscriptionDTO) {
        console.log("🚀 ~ file: subscription.controller.ts ~ SubscriptionController.createSubscription")
        return await this.subscriptionService.createSubscription(SubscriptionDTO);
    }

    @Get('getAll')
    public async getAllSubscriptions() {
        console.log("🚀 ~ file: subscription.controller.ts ~ SubscriptionController.getAllSubscriptions")
        return await this.subscriptionService.getAllSubscriptions();
    }

    @Get('get/:id')
    public async getSubscription(@Body() id: number) {
        console.log("🚀 ~ file: subscription.controller.ts ~ SubscriptionController.getSubscription")
        return await this.subscriptionService.getSubscriptionById(id);
    }

    @Post('update')
    public async updateSubscriptionById(@Body() SubscriptionDTO: SubscriptionDTO, @Body() id: number) {
        console.log("🚀 ~ file: subscription.controller.ts ~ SubscriptionController.updateSubscriptionById")
        return await this.subscriptionService.updateSubscriptionById(id, SubscriptionDTO);
    }

    @Delete('delete/:id')
    public async deleteSubscription(@Body() id: number) {
        console.log("🚀 ~ file: subscription.controller.ts ~ SubscriptionController.deleteSubscription")
        return await this.subscriptionService.deleteSubscriptionById(id);
    }
}
