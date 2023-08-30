import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Account } from "./entities/account.entity";
import { AccountDto } from "./dto/account";
import { QueryDto } from "../common/dto/query";

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(Account)
        private repository: Repository<Account>,
    ) {}

    /*
     This endpoint is here purely to develop the application
     its not part of the submission and un documented.
     */
    async createAccounts(body: AccountDto) {
        const { type, balance, currency, usageType, accountType, nickname } = body;

        const account = new Account();

        account.type = type;
        account.balance = balance;
        account.currency = currency;
        account.usageType = usageType;
        account.accountType = accountType;
        account.nickname = nickname;

        return this.repository.save(account)
    }

    async getAccounts(customerId: string, query: QueryDto) {
        /*
          it makes sense that a customer id of some sort it passed to get only that
          customers account information - passing it here just to show that
          but for the purpose of this demo im just getting all records
         */

        const accounts = await this.repository.find({
            skip:  query.page ?  query.page - 1 : 0,
            take: query.per_page || 100
        });

        const total = await this.repository.count({})

        return {
            "meta":{
                "page": query.page || 1,
                "per_page": query.per_page || 100,
                "count": accounts.length,
                "total": total
            },
            accounts
        };
    }
}
