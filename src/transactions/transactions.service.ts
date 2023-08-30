import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Transaction } from "./entities/transaction.entity";
import { TransactionDto } from "./dto/transaction";
import {QueryDto} from "../common/dto/query";

@Injectable()
export class TransactionsService {

    constructor(
        @InjectRepository(Transaction)
        private repository: Repository<Transaction>,
    ) {}

    /*
     This endpoint is here purely to develop the application
     its not part of the submission and un documented.
     */
    async createTransaction(body: TransactionDto) {
        const { date, amount, currency, description  } = body;

        const tx = new Transaction();

        tx.date = date;
        tx.amount = amount;
        tx.currency = currency;
        tx.description = description;

        return this.repository.save(tx);
    }

    async getTransactions(customerId: string, accountId: string, query: QueryDto) {
        /*
          it makes sense that a customer id of some sort it passed to get only that
          customers account information - passing it here just to show that
          it would prob come from a jwt or something similar
          but for the purpose of this demo im just getting all records
         */

        const transactions = await this.repository.find({
            skip:  query.page ?  query.page - 1 : 0,
            take: query.per_page || 100
        });

        const total = await this.repository.count({})

        return {
            "meta":{
                "page": query.page || 1,
                "per_page": query.per_page || 100,
                "count": transactions.length,
                "total": total
            },
            transactions
        };
    }




}
