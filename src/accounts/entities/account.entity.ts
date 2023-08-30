import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: string

    @Column()
    balance: number

    @Column()
    currency: string

    @Column()
    usageType: string

    @Column()
    accountType: string

    @Column()
    nickname: string
}