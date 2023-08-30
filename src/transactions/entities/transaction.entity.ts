import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string

    @Column()
    amount: number

    @Column()
    currency: string

    @Column()
    description: string
}