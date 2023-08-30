import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {ApiExcludeEndpoint, ApiOperation, ApiResponse} from "@nestjs/swagger";

import {TransactionsService} from "./transactions.service";
import {TransactionDto} from "./dto/transaction";
import {QueryDto} from "../common/dto/query";

@Controller('transactions')
export class TransactionsController {

    constructor(private readonly service: TransactionsService) {}

    @Get("/:customerId/:accountId")
    @ApiOperation({ summary: 'Get all accounts for a customer' })
    @ApiResponse({
        status: 200,
        description: 'Account records returned'
    })
    getTransactions(@Param("customerId") customerId: string, @Param("accountId") accountId: string, @Query() query: QueryDto) {
        return this.service.getTransactions(customerId, accountId, query);
    }

    @Post("/:customerId/:accountId")
    @ApiExcludeEndpoint()
    createTransaction(@Body() body: TransactionDto) {
        return this.service.createTransaction(body);
    }
}
