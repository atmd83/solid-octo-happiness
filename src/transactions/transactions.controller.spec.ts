import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Test, TestingModule} from "@nestjs/testing";
import {Transaction} from "./entities/transaction.entity";

/*
  Because I am just hard seeding a DB and this is just a demo
  I am testing against the values in the seed, rather than seeding values here
  then testing the controller and service.

  While this test is called controller spec, its actually testing the
  controller routing and the underlying service all together.
 */

describe('AccountsController', () => {
  let controller: TransactionsController;
  let service: TransactionsService;

  beforeEach(async () => {
    const TypeORMMySqlTestingModule = (entities: any[]) =>
        TypeOrmModule.forRoot({
          type :"sqlite",
          database: "local",
          entities: [__dirname + "/**/*.entity{.ts,.js}"],
          synchronize: true
        });

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeORMMySqlTestingModule([Transaction]),
        TypeOrmModule.forFeature([Transaction]),
      ],
      providers: [TransactionsService],
    }).compile();

    service = await module.get<TransactionsService>(TransactionsService);
    controller = new TransactionsController(service);
  });

  describe('GetTransactions', () => {
    let expected;
    let got;

    beforeEach(async () => {
      expected = {meta: { count: 4 }, accounts: []};
      got = await controller.getTransactions('1', '1', {} as any);
    })

    it('should return the count of records returned', async () => {
      expect(got.meta.count).toBe(expected.meta.count);
    });
  });
});