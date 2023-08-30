import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { WebhookDto } from "./dto/webhook";
import { Transaction } from "../transactions/entities/transaction.entity";

@Injectable()
export class WebhooksService {
    constructor(
        @InjectRepository(Transaction)
        private repository: Repository<Transaction>,
    ) {}

    async registerWebhook({ transaction, currency }: WebhookDto) {
        /*
         Generic webhook endpoint
         This can be used to update individual transaction records (intent, pending, complete etc) etc
         this is a super simple implementation and far from production quality

         this is hear JUST to show that a webhook from a provider can be used to update an individual record
         */

        const tx = await this.repository.findOneById(transaction);

        if (tx.currency !== currency) {
            tx.currency = currency;
        }

        return this.repository.save(tx);
    }
}
