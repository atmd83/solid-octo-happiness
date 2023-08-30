import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";

import { WebhooksController } from './webhooks.controller';
import { WebhooksService } from './webhooks.service';
import {Transaction} from "../transactions/entities/transaction.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Transaction])
  ],
  controllers: [WebhooksController],
  providers: [WebhooksService]
})
export class WebhooksModule {}
