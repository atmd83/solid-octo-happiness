import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {ApiExcludeEndpoint, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

import {AccountsService} from './accounts.service';
import {AccountDto} from "./dto/account";
import {QueryDto} from "../common/dto/query";

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
    constructor(private readonly service: AccountsService) {}

    @Get("/:customerId")
    @ApiOperation({ summary: 'Get all accounts for a customer' })
    @ApiResponse({
        status: 200,
        description: 'Account records returned'
    })
    getAccounts(@Param("customerId") customerId: string, @Query() query: QueryDto) {
        return this.service.getAccounts(customerId, query);
    }

    /*
     This endpoint is here purely to develop the application
     its not part of the submission and is undocumented.
     */
    @Post("/:customerId")
    @ApiExcludeEndpoint()
    createAccount(@Body() body: AccountDto) {
        return this.service.createAccounts(body);
    }
}
