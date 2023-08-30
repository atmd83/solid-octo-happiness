// import {IsUUID} from "class-validator";

export class TransactionDto {
    id: string;
    date: string;
    amount: number;
    currency: string;
    description: string;
}
