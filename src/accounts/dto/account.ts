// import {IsUUID} from "class-validator";

export class AccountDto {
    id: string;
    type: string;
    balance: number;
    currency: string;
    usageType: string;
    accountType: string;
    nickname: string;
}
