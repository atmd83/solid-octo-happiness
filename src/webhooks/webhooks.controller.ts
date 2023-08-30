import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse} from "@nestjs/swagger";


import {WebhooksService} from "./webhooks.service";
import {WebhookDto} from "./dto/webhook";

@Controller('webhooks')
export class WebhooksController {

    constructor(private readonly service: WebhooksService){}

    @Post("/")
    @ApiOperation({ summary: 'Webhook endpoint for update notifications' })
    @ApiResponse({
        status: 200,
        description: 'Webhook message received'
    })
    registerWebhook(@Body() body: WebhookDto) {
        console.log(body)
        return this.service.registerWebhook(body);
    }
}
